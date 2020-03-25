const axios = require('axios');
const inquirer = require('inquirer');
const slugify = require('slugify');
const fs = require('fs');

const CHALLENGE_FOLDER = './content/posts';

let challenges = [];

async function fetchChallenges() {
  const {
    data: { data },
  } = await axios.get('https://www.reddit.com/r/dailyprogrammer.json');

  challenges = data.children.map(each => {
    const { title, selftext: html, created, url } = each.data;
    const date = new Date(created * 1000);

    return { title, html, date, url };
  });

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'challenge',
        message: 'Choose a challenge:',
        choices: challenges.map(challenge => challenge.title),
      },
    ])
    .then(handleAnswers);
}

function handleAnswers({ challenge }) {
  const [answer] = challenges.filter(each => each.title === challenge);
  const [_, __, title] = answer.title.split(/\[(.*)\]/);

  let slug = slugify(title.toLowerCase());
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  slug = `${year}-${(month + 1).toString().padStart(2, '0')}-${day
    .toString()
    .padStart(2, '0')}___${slug}`;

  try {
    console.log(title, slug);
    const folder = `${CHALLENGE_FOLDER}/${slug}`;

    console.log(folder);
    fs.mkdirSync(folder);

    fs.writeFileSync(
      `${folder}/index.md`,
      `
    ---
    draft: true
    title: ${title}
    image: ../../img/default-code.png
    ___

    [Project originally posted on reddit.com/r/dailyprogrammer](${answer.url})

    ${answer.html}
    `.trim(),
    );
  } catch (err) {
    console.error(err.message);
  }
}

fetchChallenges();
