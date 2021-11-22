import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import image from '../../assets/image05.jpg';

export default function Landing() {
  return (
    <S.Landing>
      <h1>Bem vindo ao GratiBox</h1>
      <span>
        Receba em casa um box com chás, produtos organicos, incensos e muito
        mais...
      </span>
      <img src={image} alt="" />
      <div>
        <button type="button">Quero começar</button>
        <Link to="/login">Já sou grato</Link>
      </div>
    </S.Landing>
  );
}
