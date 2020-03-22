import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';

function Resume() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="/webslides/css/webslides.css" />
        <script
          src={withPrefix('/webslides/js/webslides.js')}
          type="text/javascript"></script>
        <title>Resume | jordanrhea.com</title>
      </Helmet>
      <article id="webslides">
        <section>
          <h1>Slide 1</h1>
        </section>
        <section className="bg-black aligncenter">
          <div className="wrap">
            <h1>Slide 2</h1>
          </div>
        </section>
      </article>
    </>
  );
}

export default Resume;
