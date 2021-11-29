import * as React from 'react';
import Layout from '../components/layout';

const About: React.FC<{ location: any }> = ({ location }) => {
    return (
        <Layout location={location} title="About">
            <h1>About Page</h1>
            <section>
                <p>
                    <figure className="marginnote">
                        <img src="https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-77.4469,37.5628,11.64,0/500x400?access_token=pk.eyJ1IjoicmhlYWp0IiwiYSI6ImNqNjR1MWd0YTF2ZTIzM3E3OHVzNXh6YXQifQ.aDdsJcGnpBi5982--JQZVA" alt="map" />
                    </figure>
                </p>

                <p>
                    I am a solutions developer working with both Google Workspaces and Microsoft 365. I like building tools to make our digital work lives easier.

                </p>
                <p>
                    I have lived all over the world in different roles. I was a United States Marine in Okinawa, Japan. I taught middle school English in Richmond, VA. I became a self-taught computer programmer in Izmir, Turkey. Now I am doing development work in Beijing, China.
                </p>

                <p>I write code using JavaScript, Typescript, and Google Apps Script. I have built SPFx webparts in Microsoft Sharepoint and written many automations in Google Workspaces. The idea of automating the boring parts of the day is incredible.</p>

            </section>
        </Layout>
    );
}

export default About;
