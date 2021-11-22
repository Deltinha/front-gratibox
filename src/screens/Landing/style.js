import styled from 'styled-components';

export const Landing = styled.div`
  h1 {
    margin-bottom: 44px;
  }
  span {
    font-size: 18px;
    font-weight: 300;
    width: 340px;
    text-align: center;
  }

  div {
    background-color: var(--color6);
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;
    width: 100%;
    height: 100%;
  }
  button {
    background-color: var(--color5);
    color: white;
    border-radius: 10px;
    cursor: pointer;
    width: 202px;
    height: 45px;
    margin: auto;
  }
  button,
  a {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;
