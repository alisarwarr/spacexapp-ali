import React from 'react';
import { useMissionAboutQuery } from '../../generated/graphql';
import About from './About';
import Loading from '../Loading';
import Head from '../../Head';
//CONTEXT API
import { useStateValue } from '../../StateContext';

function MissionAbout() {
    const [ { id }, dispatch ] = useStateValue();            //jo k value "useReducer" ki deraha

    const { data, loading, error } = useMissionAboutQuery({
        variables: {
           id: id
        }
    })
    
    if (loading || !data) return <Loading/>;
    if (error) return <p> Error. . . </p>;

    return (
        <div className="about">
            <Head title="Mission About"/>

            <About
                data={data}
                id={id}
            />
        </div>
    )
}

export default MissionAbout;