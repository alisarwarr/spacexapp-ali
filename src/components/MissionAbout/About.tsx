import React from 'react';
import { MissionAboutQuery } from '../../generated/graphql';
import { Typography } from '@material-ui/core';

interface AboutProps {
    data: MissionAboutQuery;
    id: string;
}

function About({ data, id }: AboutProps) {
    return (
        <div className="about_about">
            <Typography component="p"> MISSION NO : {id} </Typography>

            <table>
                <tbody>
                    <tr>
                        <th> NAME </th>
                        <td> {data.launch?.mission_name} </td>
                    </tr>
                    <tr>
                        <th> ID </th>
                        <td> {(data.launch?.mission_id) && (data.launch?.mission_id[0] ? data.launch?.mission_id[0] : `Not Available`) } </td>
                    </tr>
                    <tr>
                        <th> RESULT </th>
                        <td> {(data.launch?.launch_success) ? `Success` : `Failed` } </td>
                    </tr>
                    <tr>
                        <th> YEAR   </th>
                        <td> {data.launch?.launch_year} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default About;