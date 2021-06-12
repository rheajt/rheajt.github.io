import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';

export function Layout(props: { title?: string; children: any }) {
    let title = 'jordanrhea.com';

    if (props.title) {
        title = props.title + ' | ' + title;
    }

    return (
        <>
            <Helmet title={title} />

            <Header />

            <article>{props.children}</article>
        </>
    );
}
