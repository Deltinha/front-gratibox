import styled from 'styled-components';

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    margin-bottom: 35px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
  gap: 8px;

  > a {
    font-size: 18px;
    font-weight: 700;
  }
`;

export const Button = styled.input`
  margin-bottom: 21px;
  margin-top: 136px;
  width: 237px;
  height: 56px;
  background-color: var(--color-5);
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
`;
