const fs = require('fs');
const path = require('path');
const slugify = require('slugify');

function createPost() {
  const today = new Date();
  const postTitle = process.argv[2] || 'hello world';
  const youtubeUrl = process.argv[3];

  let templateString = fs.readFileSync(
    path.join(__dirname, 'template.md'),
    'utf8'
  );

  templateString = templateString.replace('<<POST_TITLE>>', postTitle);

  if (youtubeUrl) {
    templateString = templateString.replace('<<YOUTUBE_URL>>', youtubeUrl);
  }

  const folderString = `./content/posts/${today.getFullYear()}-${(
    today.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}-${today
    .getDate()
    .toString()
    .padStart(2, '0')}___${slugify(postTitle.toLowerCase())}`;

  fs.mkdirSync(folderString);
  fs.writeFileSync(`${folderString}/index.md`, templateString, {
    flag: 'wx',
  });
}

createPost();
