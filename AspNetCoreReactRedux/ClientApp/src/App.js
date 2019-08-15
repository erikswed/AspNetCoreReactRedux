import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Posts from './components/Posts';
import FormContainer from './components/FormContainer';
import ProgressIndicator from './components/ProgressIndicator';
import 'typeface-roboto';
export default () => (
    <Layout>
        <Route exact path='/' component={FormContainer} />
        <Route exact path='/' component={ProgressIndicator} />
        <Route exact path='/' component={Posts} />
    </Layout>
);
