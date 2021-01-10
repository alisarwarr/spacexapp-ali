import React from 'react';
import { RocketListQuery } from '../../generated/graphql';
import { useHistory } from 'react-router-dom';
//CONTEXT API
import { settingID } from '../../contextapi';
import { useStateValue } from '../../StateContext';

interface ListProps {
    data: RocketListQuery
}

function List({ data }: ListProps) {
    const [ state, dispatch ] = useStateValue();            //jo k value "useReducer" ki deraha
    const history = useHistory();

    return (
        <div className="list_list">
            <div className="list_list_title" id="rockettitle">
                <p className="p1"> OUR ROCKET </p>
                <p className="p2"> These are now used for fireworks, weaponry, ejection seats, launch vehicles for artificial satellites, human spaceflight, and space exploration. </p>
            </div>

            <div className="list_list_all">
            {
                data?.launches?.map((x, index) => {
                    return (
                        <p onClick={() => {
                            dispatch(settingID((index + 1).toString()));
                            history.push('/rocketabout');
                        }}>
                            {x?.rocket?.rocket_name}
                        </p>
                    )
                })
            }
            </div>
        </div>
    )
}

export default List;