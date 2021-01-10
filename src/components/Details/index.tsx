import React from 'react';
import { useDetailsQuery } from '../../generated/graphql';
import Render from './Render';
import Loading from '../Loading';
import Error from '../Error';
import Head from '../../Head';

function Details() {
    const { loading, error, data } = useDetailsQuery();

    if (loading || !data) return <Loading/>;
    if (error) return <Error/>;

    return (
        <div className="details">
            <Head title="Details"/>

            <Render
                data={data}
            />
        </div>
    )
}

export default Details;