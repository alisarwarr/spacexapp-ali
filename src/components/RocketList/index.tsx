import React from 'react';
import { useRocketListQuery } from '../../generated/graphql';
import List from './List';
import Loading from '../Loading';
import Error from '../Error';
import Head from '../../Head';

function RocketList() {
    const { loading, error, data } = useRocketListQuery();

    if (loading || !data) return <Loading/>;
    if (error) return <Error/>;

    return (
        <div className="list">
            <Head title="Rockets"/>

            <List
                data={data}
            />
        </div>
    )
}

export default RocketList;