import React from 'react';
import { DetailsQuery } from '../../generated/graphql';

const truncate = (str: string, n: number) => str?.length > n ? `${str.substr(0, n-1)}` : str;

interface ListProps {
    data: DetailsQuery
}

function Render({ data }: ListProps) {
    return (
        <div className="details_details">
            <div className="details_details_title">
                <p className="p1"> OUR DETAILS </p>
                <p className="p2"> SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live. </p>
            </div>

            <div className="details_details_table">
            {
                data?.launches?.map((x, index) => {
                    return (
                        <table key={index}>
                            <tbody>
                                <tr>
                                    <th> MISSION NAME </th>
                                    <td> {x?.mission_name && truncate(x?.mission_name, 13)} </td>
                                </tr>
                                <tr>
                                    <th> ROCKET NAME </th>
                                    <td> {x?.rocket?.rocket_name} </td>
                                </tr>
                                <tr>
                                    <th> LAUNCH YEAR </th>
                                    <td> {x?.launch_year} </td>
                                </tr>
                                <tr>
                                    <th> VIDEO </th>
                                    <td> {x?.links?.video_link ? <a href={x.links.video_link} target="_blank" rel="noreferrer"> WATCH NOW </a> : `Not Available`} </td>
                                </tr>
                                <tr>
                                    <th> WIKIPEDIA </th>
                                    <td> {x?.links?.wikipedia ? <a href={x.links.wikipedia} target="_blank" rel="noreferrer"> VISIT NOW </a> : `Not Available`} </td>
                                </tr>
                            </tbody>
                        </table>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Render;