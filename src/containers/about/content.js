import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const content = {
  title: 'Contact Me',
  subtitle: 'Find out more on the Socials!',
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
