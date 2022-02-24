// fetch (node não possui nativo, apenas browser)

fetch('https://dog.ceo/api/breeds/image/random').then(responseStream => {
    responseStream.json();
})

