import { useMediaQuery } from "@chakra-ui/react";
import Menu from "../Menu";

function Header() {
    const [isMobile] = useMediaQuery('(max-width: 1000px)')

    const style = { display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '6px', paddingBottom: '24px' };
    if (isMobile)
        delete style.alignItems
    return (
        <div style={style}>
            <Menu />
        </div>
    )
}

export default Header;