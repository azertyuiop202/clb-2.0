import './App.css';
import './styles/table.css';
import { Container } from 'semantic-ui-react';

import UserDashboard from './components/UserDashboard/UserDashboard';

export default () => (
  <Container style={{ width: '90%' }}>
    <h1></h1>
    <UserDashboard />
  </Container>
);