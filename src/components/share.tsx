import { styled } from "solid-styled-components";

const Share = (props: { url: string }) => {
  return (
    <StyledShareIcons>
      <li><a href={`mailto:?body=${encodeURIComponent(props.url)}`} title="Email"><svg viewBox="0 0 64 64" width="30" height="30"><rect width="64" height="64" rx="0" ry="0" fill="#7f7f7f"></rect><path d="M17,22v20h30V22H17z M35.4,32L47,22.1V41.9L35.4,32z M25.6,32L17,38.1V22.1L25.6,32z M32,33.6L18.9,43h26.2L32,33.6z M32,30.4L45.1,21H18.9L32,30.4z" fill="white"></path></svg></a></li>
      <li><a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(props.url)}`} target="_blank" rel="noopener noreferrer" title="LinkedIn"><svg viewBox="0 0 64 64" width="30" height="30"><rect width="64" height="64" rx="0" ry="0" fill="#0077b5"></rect><path d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z" fill="white"></path></svg></a></li>
      <li><a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(props.url)}`} target="_blank" rel="noopener noreferrer" title="Twitter"><svg viewBox="0 0 64 64" width="30" height="30"><rect width="64" height="64" rx="0" ry="0" fill="#00aced"></rect><path d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2 c-0.4,0-0.8,0-1.2-0.1c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9 c12.1,0,18.7-10,18.7-18.7c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z" fill="white"></path></svg></a></li>
      <li><a href={`https://www.reddit.com/submit?url=${encodeURIComponent(props.url)}`} target="_blank" rel="noopener noreferrer" title="Reddit"><svg viewBox="0 0 64 64" width="30" height="30"><rect width="64" height="64" rx="0" ry="0" fill="#ff4500"></rect><path d="M 52 32 C 52 29.8 50.2 28 48 28 C 46.9 28 45.9 28.4 45.2 29.1 C 42.2 27.1 38.2 25.8 33.8 25.6 L 36 15.8 L 43.4 17.4 C 43.4 19 44.8 20.2 46.4 20.2 C 48 20.2 49.2 18.8 49.2 17.2 C 49.2 15.6 47.8 14.4 46.2 14.4 C 45.2 14.4 44.2 14.9 43.6 15.8 L 35.2 14 C 34.8 13.9 34.4 14.2 34.2 14.6 L 31.8 25.6 C 27.2 25.8 23 27 20 29.2 C 19.2 28.4 18.2 28 17 28 C 14.8 28 13 29.8 13 32 C 13 33.4 13.8 34.8 15 35.4 C 14.8 36.2 14.8 37 14.8 37.8 C 14.8 44.6 22.6 50 32 50 C 41.4 50 49.2 44.6 49.2 37.8 C 49.2 37 49.2 36.2 49 35.4 C 50.2 34.6 51 33.4 52 32 Z M 22 35 C 22 33.4 23.4 32 25 32 C 26.6 32 28 33.4 28 35 C 28 36.6 26.6 38 25 38 C 23.4 38 22 36.6 22 35 Z M 40 43.2 C 37.6 45.6 32.4 45.6 32 45.6 C 31.6 45.6 26.4 45.6 24 43.2 C 23.6 42.8 23.6 42.2 24 41.8 C 24.4 41.4 25 41.4 25.4 41.8 C 27 43.4 31 43.6 32 43.6 C 33 43.6 37 43.4 38.6 41.8 C 39 41.4 39.6 41.4 40 41.8 C 40.4 42.2 40.4 42.8 40 43.2 Z M 39 38 C 37.4 38 36 36.6 36 35 C 36 33.4 37.4 32 39 32 C 40.6 32 42 33.4 42 35 C 42 36.6 40.6 38 39 38 Z" fill="white"></path></svg></a></li>
    </StyledShareIcons>
  );
};

export default Share;

const StyledShareIcons = styled.ul`
  transform: none; list-style: none; padding: 0; margin: 0; position: relative; display: flex; flex-direction: row;
  li { padding: 0; margin: 0; }
  a { display: inline-block; }
`;
