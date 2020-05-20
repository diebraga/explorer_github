import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Header, RepoInfo, Issues } from './styles';

import logoImg from '../assets/logosmall.svg';

interface RepositoryParams {
  repository: string;
}

export const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
  <>
  <Header>
    <img src={logoImg} />

    <Link to="//">
    <FiChevronLeft size={20}/>

      Back
    </Link>
  </Header>

  <RepoInfo>
    <header>
      <img src="https://avatars2.githubusercontent.com/u/52054459?s=460&u=d4c512846e9d96d98c2da4eeb1c9906691461b80&v=4" alt="die" />
      <div>
        <strong>aaaaa</strong>
        <p>aaaa</p>
      </div>
    </header>
    <ul>
      <li>
        <strong> 1000</strong>
        <span>stars</span>
      </li>
      <li>
        <strong> 1000</strong>
        <span>forks</span>
      </li>
      <li>
        <strong> 1000</strong>
        <span>issues</span>
      </li>

    </ul>
  </RepoInfo>

  <Issues>
  <Link to="dddddfdf">
              <div>
      <strong>aaaaaaaaaaaaaaaaaa</strong>
      <p>aaaaa</p>
              </div>

              <FiChevronRight size={20}/>
            </Link>


  </Issues>
  </>
  );
};


export default Repository;
