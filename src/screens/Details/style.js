import styled from 'styled-components';

export const Details = styled.div`
  > div {
    width: 356px;
    border-radius: 10px;
    overflow: hidden;
    background-color: var(--color4);
    padding: 0px 19px 7px 19px;
    box-sizing: border-box;

    > img {
      width: 100%;
    }
  }
`;

export const PlanDescription = styled.ul`
  margin-bottom: 30px;
  > li {
    font-weight: 700;
    font-size: 18px;
    color: var(--color6);
    line-height: 1.3;

    span {
      color: var(--color1);
    }
  }
`;

export const NexdDeliveriesDate = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
`;

export const Products = styled.div`
  color: var(--color1);
  font-size: 18px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
`;
