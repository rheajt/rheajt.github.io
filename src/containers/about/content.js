import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const content = {
  title: 'About',
  subtitle: 'I write code that solves problems.',
  links: [
    {
      to: 'https://youtube.com/jordanrhea',
      text: 'YouTube',
      Icon: FaYoutube,
      newTab: true,
    },
    {
      to: 'https://linkedin.com/in/rheajt',
      text: 'Linked In',
      Icon: FaLinkedin,
      newTab: true,
    },
    {
      to: 'https://github.com/rheajt',
      text: 'Github',
      Icon: FaGithub,
      newTab: true,
    },
  ],
};

export default content;
