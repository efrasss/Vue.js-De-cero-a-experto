const apiKey = 'KCge0qwQi4SmgdcBHMZA6kGuyuYa9MRB';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
.then((resp) => resp.json())
.then((body) => console.log({ body }))
.catch((err) => console.log( err ) );