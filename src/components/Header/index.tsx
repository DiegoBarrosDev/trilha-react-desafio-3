import logo from "../../assets/logo-dio.png"
import { Button } from "../Button"
import {
    BuscarInputContainer,
  
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
   
    UserPicture,
   
    Wrapper
} from "./styles"
import { IHeader } from "./types"
import { useNavigate } from "react-router-dom"

const Header = ({autenticado}: IHeader) => {

    const navigate = useNavigate()
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da Dio" />
                    {autenticado ? (
                        <>
                        
                        <BuscarInputContainer>
                            <Input placeholder="Buscar..." />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/92258632?v=4"/>

                    ) : (
                        <>
                        <MenuRight href="#" onClick={() => navigate('/')}>Home</MenuRight>
                        <Button title="Entrar" onClick={() => navigate('/login')}/>
                        <Button title="Cadastrar" onClick={() => navigate('/registration')}/>  
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }