import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { 
    HeaderNDrawer,
    Body,
    Footer,
    MissionList,
    MissionAbout,
    RocketList,
    RocketAbout,
    Details
} from './components';
//CONTEXT API
import { useStateValue } from './StateContext';

function App() {
    const [ { draweropen }, dispatch ] = useStateValue();

    return (
        <div style={{ overflowY: draweropen ? "hidden" : "visible" }}>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <HeaderNDrawer>
                            <div className="app">
                                <Body
                                />
    
                                <Footer
                                />
                            </div>
                        </HeaderNDrawer>
                    </Route>
    
                    <Route path="/missions" exact>
                        <HeaderNDrawer>
                            <MissionList
                            />
                        </HeaderNDrawer>
                    </Route>
    
                    <Route path="/missionabout" exact>
                        <HeaderNDrawer>
                            <MissionAbout
                            />
                        </HeaderNDrawer>
                    </Route>
    
                    <Route path="/rockets" exact>
                        <HeaderNDrawer>
                            <RocketList
                            />
                        </HeaderNDrawer>
                    </Route>
    
                    <Route path="/rocketabout" exact>
                        <HeaderNDrawer>
                            <RocketAbout
                            />
                        </HeaderNDrawer>
                    </Route>
    
                    <Route path="/details" exact>
                        <HeaderNDrawer>
                            <Details
                            />
                        </HeaderNDrawer>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;