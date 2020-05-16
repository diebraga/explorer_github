import React from 'react';

import logoImg from '../assets/logosmall.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
    <>
    <img src={logoImg} alt="git explorer" />
    <Title>Explore Github Repositories</Title>

    <Form>
      <input placeholder="Search repository" />
      <button type="submit">Go</button>
    </Form>
    </>
);

export default Dashboard;
