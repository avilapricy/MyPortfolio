import Footer from "../src/common/components/Footer";
import Header from "../src/common/components/Header";
import ItemList from "../src/common/components/ItemList";
import { ContainerList, ContainerResume, ItemsResume } from "../src/common/components/ItemList/style";
import education from '../public/education.json';
import work from '../public/work.json';
import Typography from "../src/common/components/Typography";
import theme from "../src/common/theme";
import { useMediaQuery } from "@chakra-ui/react";

export default function Home(props) {
  const [isMobile] = useMediaQuery('(max-width: 1000px)')

  return (
    <div>
      <Header />
      <ContainerResume>
        <ItemsResume>
          <Typography
            bold
            variant='secondary'
            color={theme.colors.basic.basic7}
            type={isMobile ? "subtitle1" : 'h3'}
            >Trabalhos</Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {
              work.map((work, index) => {
                const { info, title } = work;
                return (
                  <ItemList
                    key={index}
                    title={title}
                    info={info}
                  />
                )
              })
            }
          </div>
        </ItemsResume>
        <ItemsResume>
          <Typography
            bold
            variant='secondary'
            color={theme.colors.basic.basic7}
            type={isMobile ? "subtitle1" : 'h3'}
            >Educação</Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {
              education.map((edu, index) => {
                const { info, title } = edu;
                return (
                  <ItemList
                    key={index}
                    title={title}
                    info={info}
                  />
                )
              })
            }
          </div>
        </ItemsResume>
      </ContainerResume>
      <Footer />
    </div>
  )
}
