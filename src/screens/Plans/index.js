import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GreetingText from '../../components/GreetingText';
import UserContext from '../../contexts/userContext';
import * as S from './style';
import weeklyImage from '../../assets/image04.jpg';
import monthlyImage from '../../assets/image02.jpg';

export default function Plans() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  function goToSubscribe() {
    navigate('/subscribe');
  }
  return (
    <S.Plans>
      <GreetingText username={user.name}>
        Você ainda não assinou um plano, que tal assinar agora?
      </GreetingText>
      <S.PlanSelection>
        <S.PlanCard>
          <img src={weeklyImage} alt="" />
          <span>
            Você recebe um box por semana. Ideal para quem quer exercer a
            gratidão todos os dias.
          </span>
          <button onClick={goToSubscribe} type="button">
            Assinar
          </button>
        </S.PlanCard>
        <S.PlanCard>
          <img src={monthlyImage} alt="" />
          <span>
            <p>Você recebe um box por mês.</p>
            <p>Ideal para quem está começando agora.</p>
          </span>
          <button onClick={goToSubscribe} type="button">
            Assinar
          </button>
        </S.PlanCard>
      </S.PlanSelection>
    </S.Plans>
  );
}
