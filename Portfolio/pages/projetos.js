import Footer from "../src/common/components/Footer";
import Header from "../src/common/components/Header";
import ItemList from "../src/common/components/ItemList";
import { ContainerList } from "../src/common/components/ItemList/style";
import projetos from '../public/projetos/projetos.json';

export default function Home(props) {

  return (
    <div>
      <Header />
      <ContainerList>
        {
          projetos.map((proj, index) => {
            const { img, info, title, href } = proj;
            return (
              <ItemList
                key={index} 
                title={title}
                info={info} 
                img={img}
                image={true}
                href={href}
              />
            )
          })
        }
      </ContainerList>
      <Footer />
    </div>
  )
}
