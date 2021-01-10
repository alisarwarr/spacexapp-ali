import React from 'react';
import { Card } from '@material-ui/core';
import { warn } from '../images';
import Head from '../Head';

function Error() {
    return (
        <Card className="error" square>
            <Head title="Error :'("/>

            <img src={warn} alt=""/>
            <ul>
                <li>e</li> <li>r</li> <li>r</li> <li>o</li> <li>r</li> <li>.</li> <li>.</li>
            </ul>
        </Card>
    )
}

export default Error;