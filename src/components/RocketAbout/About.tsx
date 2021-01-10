import React from 'react';
import { RocketAboutQuery } from '../../generated/graphql';
import { Typography } from '@material-ui/core';

interface AboutProps {
    data: RocketAboutQuery;
    id: string;
}

function About({ data, id }: AboutProps) {
    return (
        <div className="about_about">
            <Typography component="p"> ROCKET NO : {id} </Typography>

            <table>
                <tbody>
                    <tr>
                        <th> NAME </th>
                        <td> {data.launch?.rocket?.rocket_name} </td>
                    </tr>
                    <tr>
                        <th> TYPE </th>
                        <td> {data.launch?.rocket?.rocket_type} </td>
                    </tr>
                    <tr>
                        <th> RESULT   </th>
                        <td>
                            {
                                (data.launch?.rocket?.first_stage?.cores) &&
                                (
                                   (data.launch?.rocket?.first_stage?.cores[0]?.land_success === null && `Unknown`)
                                || (data.launch?.rocket?.first_stage?.cores[0]?.land_success ? `Success` : `Failed`)
                                )
                            }
                        </td>
                    </tr>
                    <tr>
                        <th> REUSED </th>
                        <td> {(data.launch?.rocket?.first_stage?.cores) && (data.launch?.rocket?.first_stage?.cores[0]?.reused ? `Yes` : `No`)} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default About;