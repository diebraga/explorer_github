import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 45px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;


export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px;
    color: #3a3a3a;

    border: 2px solid #fff;

    ${(props) => props.hasError && css`
      border-color: #c53030;
    `}

    &::placeholder {
      color: #a8a8b3
    }
  }

  button {
    margin-left: 10px;
    width: 210px;
    background: #3b9eff;
    height: 70px;
    border-radius: 5px;
    border: 0;
    font-weight: bold;
    color: #fff;

    &:hover {
      background: ${shade(0.2, '#3b9eff')}
    }
  }


`;

export const Error = styled.span`
  color: #c53030;
  display: block;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

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

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
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
