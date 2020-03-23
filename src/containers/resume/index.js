import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';

// import WebSlides from '../../../static/webslides/js/webslides';
// import '../../../static/webslides/css/webslides.css';

function Resume() {
  return (
    <>
      <Helmet>
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

      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
            window.ws = ${new WebSlides()};
          `,
        }}></script> */}
    </>
  );
}

export default Resume;
