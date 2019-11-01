import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Tasks from '../containers/Tasks';
import TaskDetails from '../containers/TaskDetails';
import Personal from '../containers/Personal';
import Sap from '../containers/Sap'
import Explotacion from '../containers/Explotacion'
import Taller from '../containers/Taller'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tasks" component={Tasks} />
        <Route exact path="/task_details" component={TaskDetails} />
        <Route exact path="/personal" component={Personal} />
        <Route exact path="/sap" component={Sap} />
        <Route exact path="/explotacion" component={Explotacion} />
        <Route exact path="/taller" component={Taller} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;