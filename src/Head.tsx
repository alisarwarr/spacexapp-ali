import React from 'react';
import { Helmet } from 'react-helmet';

interface HeadProps {
    title: string;
}

function Head({ title }: HeadProps) {
    const AppName = "Space X";

    return (
        <Helmet
            title={
                (title === "Loading..." || title === "Error :'(" )
                ? title : `${title} | ${AppName}`
            }
        />
    )
}

export default Head;