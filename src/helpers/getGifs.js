export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=u1YzAHNJxoRI3QZJMmHZu3n7NNvyD9Z4&q=${category}&limit=5`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    return gifs;
  };