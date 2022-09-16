import { Container, Button } from "./style";
import Input from "../../Components/Input";
import { toast } from "react-toastify";
import imagem from "../../Assets/Spreadsheets-bro.png";

import { api } from "../../Services/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory, Redirect } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { FornecedorData } from "../../Providers/Fornecedores";

const Login = (authenticated, setAuthenthicated) => {
  

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Minimo de 6 digitos")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onSubmitFunction = async (data) => {
    const response = await api.post("/sessions/", data).catch((err) => {
      toast.error("Email ou senha inválidos");
    });

    const { user, token } = response.data;

    localStorage.setItem("@KenzieHub:token", token);
    localStorage.setItem("@KenzieHub:user", JSON.stringify(user));
    history.push(`/dashboard/${user.id}`);
  };

  if (localStorage.getItem("@KenzieHub:token")) {
    return <Redirect to={`/dashboard/:user_id`} />;
  }
  return (
    <Container>
      <img src={imagem} alt="imagemFornecedores" />
      <div className="main">
        <header>
          <h2>Gerenciamento de fornecedores</h2>
        </header>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Login</h1>

          <Input
            register={register}
            name="email"
            label="Email"
            placeholder="Digite aqui seu email"
            type="email"
            error={errors.email?.message}
          />

          <Input
            register={register}
            name="password"
            label="Senha"
            placeholder="Digite aqui sua senha"
            type="password"
            error={errors.password?.message}
          />
          <Button width="320px" whiteSchema type="submit">
            Entrar
          </Button>
          <p>Ainda não possui uma conta?</p>

          <Button
            width="320px"
            type="submit"
            onClick={() => history.push("/cadastro")}
          >
            Cadastre-se
          </Button>
        </form>
      </div>
    </Container>
  );
};
/*  */
export default Login;
