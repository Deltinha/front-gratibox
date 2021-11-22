import styled from 'styled-components';

export const Subscribe = styled.div`
  > div {
    width: 356px;
    border-radius: 10px;
    background-color: var(--color4);
    padding: 0px 19px 7px 19px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;

    > img {
      width: 100%;
    }
  }
`;

export const Form = styled.div`
  color: var(--color6);
  font-weight: 700;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  input[type='text'] {
    background-color: var(--color7);
    border: none;
    height: 44px;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 700;
    color: var(--color6);
  }
  .state-select__value-container,
  .plan-select__value-container {
    height: 44px;
  }
  .state-select__control,
  .plan-select__control {
    background-color: var(--color7);
  }
  .state-select-container {
    box-sizing: border-box;
    width: 108px;
    * {
      color: var(--color6);
    }
  }
  .plan-select-container {
    * {
      color: var(--color6);
    }
  }
`;

export const CitySelection = styled.div`
  display: flex;
  justify-content: space-between;

  > input[type='text'] {
    width: 200px;
  }
`;

export const ProductsSelection = styled.div`
  > span {
    margin-bottom: 7px;
    display: inline-block;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
  }
  background-color: var(--color7);
  border-radius: 5px;
  padding: 3px 31px 17px 12px;
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
`;

export const BlueButton = styled.button`
  background-color: ${({ disabled }) =>
    disabled ? 'var(--color2)' : 'var(--color5)'};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  font-size: 24px;
  font-weight: 500;
  width: 202px;
  height: 39px;
  color: var(--color4);
  border-radius: 10px;
`;
