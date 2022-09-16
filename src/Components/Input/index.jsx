import { Container, InputContainer } from "./style";

export default function Input({
  label,
  icon: Icon,
  register,
  name,
  error,
  ...rest
}) {
  return (
    <Container>
      <div>
        {label} {!!error && <span> -{error}</span>}
      </div>

      <InputContainer isErrored={!!error}>
        <input {...register(name)} {...rest} />
        {Icon && <Icon />}
      </InputContainer>
    </Container>
  );
}
