import styled from 'styled-components';

export const Plans = styled.div``;

export const PlanSelection = styled.div`
  display: flex;
  flex-direction: column;
  width: 356px;
  height: 60vh;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border-radius: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const PlanCard = styled.div`
  background-color: var(--color3);
  width: 100%;
  border-radius: 10px;
  padding: 0px 19px 7px 19px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;

  > img {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  > span {
    color: var(--color6);
    font-weight: 700;
    font-size: 18px;
    margin-top: 21px;
    margin-bottom: 36px;
  }

  > button {
    width: 168px;
    height: 39px;
    background-color: var(--color5);
    color: white;
    border-radius: 10px;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
  }
`;
