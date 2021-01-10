import { gql } from '@apollo/client';

export const ROCKETABOUT_QUERY = gql`
    query RocketAbout($id: String!){
        launch(id: $id) {
            rocket {
                rocket_name
                rocket_type
                first_stage {
                cores {
                   reused
                   land_success
                }
              }
            }
        }
      }
`;