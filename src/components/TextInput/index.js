import React from 'react';
import * as S from './style';

export default function TextInput({ placeholder, value, onChange, type }) {
  return (
    <S.TextInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
