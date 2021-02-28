import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  function handleSubmit(event) {
    //Fez uma requisição e por isso irá usar um Fetch
    event.preventDefault();
    const { url, options } = PASSWORD_LOST({
      login: login.value,
      url: 'http://localhost:3000/login/perdeu',
    });
    request(url, options);
  }

  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Email / Usuário" type="text" name="login" {...login} />
        {login.value}
        <Button>Enviar Email</Button>
      </form>
    </section>
  );
};

export default LoginPasswordLost;
