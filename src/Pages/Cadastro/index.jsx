import { Container, Button } from "./style";
import { toast } from "react-toastify";
import Input from "../../Components/Input";
import imagem from "../../Assets/Spreadsheets-bro.png";

import { api } from "../../Services/api";

import { useHistory, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Cadastro = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Minimo de 6 digitos")
      .required("Campo obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Digite a mesma senha")
      .required("Campo obrigatório!"),
    course_module: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    const { name, email, password } = data;
    const user = {
      name,
      email,
      password,
    };
    api
      .post("/users/", user)
      .then((response) => {
        toast.success("Sua conta foi criada");
        return history.push("/");
      })
      .catch((err) => toast.error("Algo deu errado"));
  };

  if (localStorage.getItem("@gigalink:token")) {
    return <Redirect to={`/dashboard/`} />;
  }

  return (
    <Container>
      <img src={imagem} alt="imagemFornecedores" />
      <div className="main">
        <header>
          <h2>Gestão de fornecedores</h2>
          <button onClick={() => history.push("/")}>Voltar</button>{" "}
        </header>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Cadastro</h1>
          <h4> Rapido e fácil, vamos nessa</h4>

          <Input
            register={register}
            name="name"
            label="Nome"
            placeholder="Digite aqui seu nome"
            type="text"
            error={errors.name?.message}
          />

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

          <Input
            register={register}
            name="passwordConfirm"
            label="Confirmar senha"
            placeholder="Digite novamente sua senha"
            type="password"
            error={errors.passwordConfirm?.message}
          />

          <Button type="submit" width="100%">
            Cadastre-se
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Cadastro;
