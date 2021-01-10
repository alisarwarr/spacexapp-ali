import { gql } from '@apollo/client';

export const ROCKETLIST_QUERY = gql`
    query RocketList {
        launches {
            rocket {
                rocket_name
            }
        }
    }
`;