import { gql } from '@apollo/client';

export const MISSIONLIST_QUERY = gql`
    query MissionList {
        launches {
            mission_name
        }
    }
`;