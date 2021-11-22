import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import TextInput from '../../components/TextInput';
import UserContext from '../../contexts/userContext';
import { postLogin } from '../../services/user';
import * as S from './style';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.token) {
      navigate('/details');
    }
  }, []);

  useEffect(()=>{
    if(email === '' || password === ''){
      setSubmitDisabled(true);
    }
    else {
      setSubmitDisabled(false);
    }
  },[email, password]);

  function processError(status) {
    if (status === 403 || status === 400) {
      Swal.fire('E-mail ou senha inválidos.');
    }
    if (status === 500) {
      Swal.fire('Algo deu errado. Por favor tente mais tarde.');
    }
  }
  function submitForm(e) {
    e.preventDefault();
    const body = {
      email,
      password,
    };

    postLogin(body)
      .then((res) => {
        setUser(res.data);
        navigate('/details');
      })
      .catch((err) => processError(err.response.status));
  }

  return (
    <S.Login>
      <h1>Bem vindo ao GratiBox</h1>
      <S.Form onSubmit={(e) => submitForm(e)}>
        <TextInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextInput
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <S.Button disabled={submitDisabled} type="submit" value="Entrar" />
        <Link to="/register">Ainda não sou grato(a).</Link>
      </S.Form>
    </S.Login>
  );
}
