import styled from 'styled-components';


export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    align-items: center;
    display: flex;
    transition: transform 2.0s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    svg {
        margin-left: auto;
        color: #A8A8B3;
      }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3D3D4D;
      }

      p {
        font-size: 18px;
        margin-top: 4px;
        color: #A8A8B3;
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepoInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  div {
    margin-left:  24px;

    strong {
      font-size: 36px;
      color: #3d3d4d;
    }

    p {
      margin-top: 4px;
      font-size: 18px;
      color: #737380;
    }
  }

ul {
  margin-top: 40px;
  list-style: none;
  display: flex;

  li {
    & + li {
      margin-left: 70px
    }
    strong {
      display: block;
      font-size: 36px;


      color: #3d3d4d;
    }

    span {
      display: block;
      margin-top: 4px;
      color: #6c6c80;
    }
  }
}
`;