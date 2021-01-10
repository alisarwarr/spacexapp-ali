import React from 'react';
import { useMissionListQuery } from '../../generated/graphql';
import List from './List';
import Loading from '../Loading';
import Error from '../Error';
import Head from '../../Head';

function MissionList() {
    const { loading, error, data } = useMissionListQuery();

    if (loading || !data) return <Loading/>;
    if (error) return <Error/>;

    return (
        <div className="list">
            <Head title="Missions"/>

            <List
                data={data}
            />
        </div>
    )
}

export default MissionList;