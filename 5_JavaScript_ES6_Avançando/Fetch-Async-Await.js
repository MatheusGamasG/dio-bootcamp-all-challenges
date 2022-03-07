// fetch (node não possui nativo, apenas browser)

fetch('https://dog.ceo/api/breeds/image/random')
.then(responseStream => {
    if (responseStream.status === 200) {
        return responseStream.json();
    } else {
        throw new Error('Oops...');
    }    
})
.then(data => console.log(data))
.catch(err => console.log(err));

// async / await

const fn = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('123456')
        }, 2000)
    });

const parser = async () => {
    const data = await fn();
    console.log(data);
    const dog = await fetch('https://dog.ceo/api/breeds/image/random')
    .then( (response) => {
        console.log(response);
        return response.json();
    })
    return dog;
}

parser()
.then((resposta) => {
    console.log(resposta)
})

// EventEmitter
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('User Logged', data => {
    console.log(data);
})
emitter.emit('User Logged', { user: 'Matheus Guimarães' });