import React from 'react';
import { MissionListQuery } from '../../generated/graphql';
import { useHistory } from 'react-router-dom';
//CONTEXT API
import { settingID } from '../../contextapi';
import { useStateValue } from '../../StateContext';

interface ListProps {
    data: MissionListQuery
}

function List({ data }: ListProps) {
    const [ state, dispatch ] = useStateValue();            //jo k value "useReducer" ki deraha
    const history = useHistory();

    return (
        <div className="list_list">
            <div className="list_list_title">
                <p className="p1"> OUR MISSONS </p>
                <p className="p2"> There vehicle Starship is SpaceX’s fully reusable transportation system designed to carry both crew and cargo to the Earth’s orbit, the Moon, Mars. </p>
            </div>

            <div className="list_list_all">
            {
                data?.launches?.map((x, index) => {
                    return (
                        <p key={index} onClick={() => {
                            dispatch(settingID((index + 1).toString()));
                            history.push('/missionabout');
                        }}>
                            {x?.mission_name}
                        </p>
                    )
                })
            }
            </div>
        </div>
    )
}

export default List;