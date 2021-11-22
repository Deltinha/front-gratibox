import styled from 'styled-components';

export const Register = styled.div`
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
  background-color: ${({ disabled }) =>
    disabled ? 'var(--color2)' : 'var(--color5)'};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  margin-bottom: 21px;
  margin-top: 54px;
  width: 237px;
  height: 56px;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`;
