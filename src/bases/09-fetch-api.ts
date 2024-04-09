const apiKey = "KCge0qwQi4SmgdcBHMZA6kGuyuYa9MRB";

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then((resp) => resp.json())
  .then((body) => {
    console.log(body.data.images.downsizedStill.url);
  })
  .catch((err) => console.info(err));
