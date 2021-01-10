import { gql } from '@apollo/client';

export const DETAILS_QUERY = gql`
    query DETAILS {
        launches {
            mission_name
            rocket {
               rocket_name
            }
            launch_year
            links {
               video_link
               wikipedia
            }
        }
    }
`;