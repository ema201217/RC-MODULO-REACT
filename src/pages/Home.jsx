import { CarouselHome } from "../components/CarouselHome";
import { Layout } from "../layouts/Layout";

export const Home = () => {
  const carouselItems = [{
    src:"https://wowslider.com/sliders/demo-77/data1/images/tuscany428041.jpg",
    alt:"img 1",
    title:"Titulo Carousel 1",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores odit maxime vel laborum, soluta sapiente! Reiciendis, asperiores. Provident ips"
  }]
  return (
    <Layout>
      <CarouselHome items={carouselItems}/>
    </Layout>
  );
};
