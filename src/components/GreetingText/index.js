import React from 'react';
import * as S from './style';

export default function GreetingText({ username, children: motd }) {
  return (
    <S.GreetingText>
      <h2>Bom te ver por aqui, {username}</h2>
      <h3>{motd}</h3>
    </S.GreetingText>
  );
}
