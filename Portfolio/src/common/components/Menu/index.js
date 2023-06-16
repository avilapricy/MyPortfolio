import { useRouter } from "next/router";
import Typography from "../Typography";
import { Item, List } from "./style";


function Menu() {
    const router = useRouter();

    const onNavigation = (path) => {
        router.push(path);
    }

    const asPath = router.asPath;


    return (
        <List>
            {
                [
                    {
                        label: "Home",
                        path: "/"
                    },
                    {
                        label: "Resumo",
                        path: "/resumo"
                    },
                    {
                        label: "Projetos",
                        path: "/projetos"
                    },
                ].map((menuItem, index) => {
                    const { label, path } = menuItem
                    return (
                        <Item key={index} onClick={() => onNavigation(path)}>
                            <Typography variant="primary" type="paragraphy1" bold={asPath == path}>
                                {label}
                            </Typography>
                        </Item>
                    )
                })
            }
        </List>
    )
}

export default Menu;