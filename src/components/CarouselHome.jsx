import Carousel from "react-bootstrap/Carousel";

export const CarouselHome = ({ items = [] }) => {
  return (
    <Carousel fade>
      {items.map((item) => {
        return (
          <Carousel.Item key={item.id}>
            <img className="d-block w-100" src={item.src} alt={item.alt} />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
