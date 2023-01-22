import { useState } from "react";
import { formatGifData } from "../../helpers/formatGifData";
import { useFetch } from "../../hook/useFetch";
import { GifItem } from "./GifItem";
import { SearchBar } from "./SearchBar";
import { Container, GifItemsContainer, Message, Title } from "./styled";
const api_key = process.env.REACT_APP_API_KEY;

export const GifApp = () => {
  const [value, setValue] = useState(null);
  const { data, loading } = useFetch({
    url: "https://api.giphy.com/v1/gifs/search",
    options: {
      params: {
        limit: 15,
        offset: 0,
        rating: "g",
        lang: "en",
        q: value,
        api_key,
      },
    },
    formatter: formatGifData,
  });

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Title>Gif App</Title>
      <SearchBar onChange={handleChangeValue} onSubmit={handleSubmit} />
      <GifItemsContainer>
        {!loading &&
          data.map(({ title, src }, key) => {
            return <GifItem key={key} src={src} caption={title} />;
          })}
        {(loading || !data.length) && (
          <Message>COLOCA LO QUE 👆 QUIERAS BUSCAR</Message>
        )}
      </GifItemsContainer>
    </Container>
  );
};
