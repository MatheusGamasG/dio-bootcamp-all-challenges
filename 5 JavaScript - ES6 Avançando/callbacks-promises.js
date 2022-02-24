// Promises

const doSomethingPromise = new Promise((resolve, reject) => {
    // trata a requisição
    resolve('Lols');
});
const doSomethingElsePromise = new Promise((resolve, reject) => {
    resolve('Damn');
})

doSomethingPromise.then((data) => {
    console.log(data.split(''));
    return doSomethingElsePromise;
})
.then((data2) => {
    console.log(data2.split(''));
})
.catch(err => console.log('Oops ' + err));


// Callbacks e o problema do callback hell

function doSomething(callback) {
    // do something
    setTimeout(() => {
        callback('Lols');
    }, 1000);
}

function doSomethingElse(callback) {
    setTimeout(() => {
        callback('Damn')
    }, 1000)
}

function doAll() {
    try {
      doSomething((param) => {
      const msg1 = param.split('');
        try {
        doSomethingElse((param2) => {
            const msg2 = param2.split('');
            try {
                setTimeout(() => {
                    console.log(msg1, msg2);
                }, 1000)
            } catch(err) {
                // handle error
            }
        })
        } catch(err) {
            // handle error
        }
      })
    } catch(err) {
        // handle error
    }
}

doAll();