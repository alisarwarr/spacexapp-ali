import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Head from '../Head';
//CONTEXT API
import { useStateValue } from '../StateContext';

const truncate = (str: string, n: number) => str?.length > n ? `${str.substr(0, n-1)}.` : str;

function Body() {
    const [ { draweropen }, dispatch ] = useStateValue();
    const screen900 = useMediaQuery('(max-width:900px)');

    return (
        <div className="body">
            <Head title="Home"/>

            <ul style={
                draweropen ? { marginLeft: "2.9rem", fontSize: "4.25rem" } : {}
            }>
                <li>S</li> <li>P</li> <li>A</li> <li>C</li> <li>E</li> <li style={{ marginLeft: "0.5rem" }}>X</li>
            </ul>

            <p style={
                draweropen ? { width: "28.5rem" } : {}
            }>
                {
                    !screen900 ?    //for truncate text after 900px
                    truncate(`
                        ' SpaceX ' is an American aerospace manufacturer and space transportation
                        services company headquartered in Hawthorne, California. It was founded
                        in 2002 by Elon Musk with a goal of reducing space transportation
                        costs to enable the colonization of Mars, Company was founded in 2002
                        to revolutionize space.
                    `, 252)
                    :
                    `' SpaceX ' is an American aerospace manufacturer and space transportation
                    services company headquartered in Hawthorne, California. It was founded
                    in 2002 by Elon Musk with the goal of reducing space transportation
                    costs to enable the colonization of Mars, Company was founded in 2002
                    to revolutionize space.`
                }
            </p>
        </div>
    )
}

export default Body;