import React from 'react';
import { Card } from '@material-ui/core';
import { load } from '../images';
import Head from '../Head';

function Loading() {
    return (
        <Card className="loading" square>
            <Head title="Loading..."/>

            <img src={load} alt=""/>
            <ul>
                <li>l</li> <li>o</li> <li>a</li> <li>d</li> <li>i</li> <li>n</li> <li>g</li> <li>.</li> <li>.</li> <li>.</li>
            </ul>
        </Card>
    )
}

export default Loading;