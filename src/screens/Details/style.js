import styled from 'styled-components';

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h2 {
    max-width: 325px;
    line-height: 1.3;
    margin-bottom: 22px;
  }

  > h3 {
    max-width: 325px;
    margin-bottom: 13px;
  }

  > div {
    width: 356px;
    border-radius: 10px;
    overflow: hidden;
    background-color: var(--color-4);
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
    color: var(--color-6);
    line-height: 1.3;

    span {
      color: var(--color-1);
    }
  }
`;

export const NexdDeliveriesDate = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
`;

export const Products = styled.div`
  color: var(--color-1);
  font-size: 18px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
`;
