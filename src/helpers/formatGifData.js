export const formatGifData = ({data}) => {
  console.log(data)
  return data?.map(
    ({
      title,
      images: {
        original: { url },
      },
    }) => ({ title, src: url })
  );
};
