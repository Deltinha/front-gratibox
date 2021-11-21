/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import TextInput from '../../components/TextInput';
import UserContext from '../../contexts/userContext';
import { postRegister } from '../../services/user';
import * as S from './style';

export default function Register() {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');
  const navigate = useNavigate();

  function processError(status) {
    if (status === 409) {
      Swal.fire('Este email já está sendo usado');
    }
    if (status === 400) {
      Swal.fire('Campos preenchidos incorretamente');
    }
  }

  function submitForm(e) {
    e.preventDefault();

    if (password !== passwordTwo) {
      Swal.fire('As senhas inseridas são diferentes');
      return;
    }

    const body = {
      name,
      email,
      password,
    };

    postRegister(body)
      .then(() => {
        setUser({});
        navigate('/login');
      })
      .catch((res) => {
        processError(res.response.status);
      });
  }

  return (
    <S.Register>
      <h1>Bem vindo ao GratiBox</h1>
      <S.Form
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
        <TextInput
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextInput
          type="password"
          placeholder="Senha (entre 8 e 16 dígitos)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <TextInput
          type="password"
          placeholder="Confirmar senha"
          value={passwordTwo}
          onChange={(e) => setPasswordTwo(e.target.value)}
          required
        />
        <S.Button type="submit" value="Cadastrar" />
        <Link to="/login">Já sou grato(a)!</Link>
      </S.Form>
    </S.Register>
  );
}
