import { gql } from '@apollo/client';

export const MISSIONABOUT_QUERY = gql`
    query MissionAbout($id: String!){
        launch(id: $id) {
            mission_name
            mission_id
            launch_year
            launch_success
        }
      }
`;