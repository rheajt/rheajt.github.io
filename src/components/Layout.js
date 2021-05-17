import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';

export function Layout(props) {
    let title = 'jordanrhea.com';

    if (props.title) {
        title = props.title + ' | ' + title;
    }

    return (
        <div>
            <Helmet title={title} />

            <Header />
            {props.children}
        </div>
    );
}
