import Typography from "../Typography";
import { ContainerPricy, Content, Pri, Folha, Info, Button, IconGit, IconIn, ContentIcons, Icons } from "./style";
import theme from "../../theme"
import { Link, useMediaQuery } from "@chakra-ui/react";

function Pricy() {
    const [isMobile] = useMediaQuery('(max-width: 1000px)')

    return (
        <ContainerPricy>
            <Folha src="/pricy/folha.svg" />
            <Content>
                <Info>
                    <Typography
                        color={theme.colors.secondary.secondary1}
                        variant="secondary"
                        type={isMobile ? "subtitle1" : "h2"}
                        children={'Pricy Avila'}
                    />
                    <Typography
                        color={theme.colors.secondary.secondary1}
                        variant="primary"
                        type={isMobile ? "paragraphy2" : "subtitle2"}
                        children={'Sou uma desenvolvedora front-end especializada em HTML, CSS, JavaScript, React.Js e Next.Js. Busco constantemente aprender e experimentar novas tecnologias para melhorar minhas habilidades. Se você precisa de um desenvolvedor front-end com experiência em criação de interfaces de usuário, entre em contato para discutirmos como posso ajudar em seus projetos.'}
                    />
                    <ContentIcons>
                        {isMobile && <Pri src="/pricy/me.jpg" />}
                        <Icons>
                            <div style={{ display: 'flex', gap: 10 }}>
                                <a target="_blank" href="https://github.com/avilapricy">
                                    <Button id="image-button">
                                        <IconGit src="/pricy/github.png" />
                                    </Button>
                                </a>
                                <a target="_blank" href="https://linkedin.com/in/pricy-ávila-69713a228">
                                    <Button id="image-button">
                                        <IconIn src="/pricy/in.png" />
                                    </Button>
                                </a>
                            </div>
                            <div>
                                <Typography
                                    color={theme.colors.secondary.secondary1}
                                    variant="primary"
                                    type={isMobile ? "paragraphy2" : "subtitle2"}
                                    children={'Contato:'}
                                />
                                <Link target="_blank" color='teal.500' href='https://api.whatsapp.com/send?phone=+5541997905376&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es'>
                                    +55 41 99790-5376
                                </Link>
                            </div>
                        </Icons>
                    </ContentIcons>
                </Info>
                {!isMobile && <Pri src="/pricy/me.jpg" />}
            </Content>

        </ContainerPricy>
    )
}

export default Pricy;