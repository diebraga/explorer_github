import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../assets/logosmall.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
    <>
    <img src={logoImg} alt="git explorer" />
    <Title>Explore Github Repositories</Title>

    <Form>
      <input placeholder="Search repository" />
      <button type="submit">Submit</button>
    </Form>

    <Repositories>
      <a href="">
        <img
          src="https://avatars2.githubusercontent.com/u/52054459?s=460&u=d4c512846e9d96d98c2da4eeb1c9906691461b80&v=4"
          alt="Diego Braga"
        />
        <div>
          <strong>aaaaaaaaaaaaa</strong>
          <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </div>

        <FiChevronRight size={20}/>
      </a>
      <a href="">
        <img
          src="https://avatars2.githubusercontent.com/u/52054459?s=460&u=d4c512846e9d96d98c2da4eeb1c9906691461b80&v=4"
          alt="Diego Braga"
        />
        <div>
          <strong>aaaaaaaaaaaaa</strong>
          <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </div>

        <FiChevronRight size={20}/>
      </a>

    </Repositories>
    </>
);

export default Dashboard;
