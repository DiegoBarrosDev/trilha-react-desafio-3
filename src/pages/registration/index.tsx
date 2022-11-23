
import { MdEmail, MdLock, MdPerson } from "react-icons/md"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Column, Container, FazerLogin, JaTenhoConta, RegistrationWarning, Row, SubTitleRegistration, Title, TitleRegistration, Wrapper } from "./styles"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from "../../services/api"
import { IFormRegistration } from "./types"

const schema = yup.object({
    email: yup.string().email('E-mail não é válido').required('Campo obrigatório'),
    password: yup.string().min(4, 'Sua senha deve conter pelo menos 4 caracteres').required('Campo obrigatório'),
}).required();

const Registration = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormRegistration>({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>

                </Column>
                <Column>
                    <Wrapper>
                        <TitleRegistration>Comece agora grátis</TitleRegistration>
                        <SubTitleRegistration>Crie sua conta e make the change._</SubTitleRegistration>
                        <form>
                            <Input
                                name="name"

                                errorMessage={errors.email?.message}
                                control={control}
                                placeholder="Nome completo" leftIcon={<MdPerson style={{color:'#8647AD'}}/>} />
                            <Input
                                name="email"

                                errorMessage={errors.email?.message}
                                control={control}
                                placeholder="E-mail" leftIcon={<MdEmail />} />
                            <Input
                                name="password"
                                errorMessage={errors.password?.message}
                                control={control}
                                placeholder="Senha" type="password" leftIcon={<MdLock />} />
                            <Button title="Criar minha conta" variant="secondary" type="submit" />
                        </form>

                        <Row>
                            <RegistrationWarning>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</RegistrationWarning>
                        </Row>
                        <Row>
                            <JaTenhoConta>
                                Já tenho uma conta.  <FazerLogin onClick={() => navigate('/login')}>Fazer login</FazerLogin>
                            </JaTenhoConta>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>

        </>
    )
}

export { Registration }