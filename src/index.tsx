import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/Style.scss';
import { client } from './config';
import { ApolloProvider } from '@apollo/client';
//CONTEXT API
import { StateProvider } from './StateContext';

ReactDOM.render(
<ApolloProvider client={client}>
<StateProvider>
<App/>
</StateProvider>
</ApolloProvider>
, document.getElementById("root"));