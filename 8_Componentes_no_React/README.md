# Trabalhando com Componentes em React

O curso sobrepõe algumas coisas vista no curso anterior, que foi de introdução. Por isso, o que já foi visto não será anotado. 📖

## UseState

É uma memória temporária no navegador. Então nos serve para dar vida aos componentes, efeitos dinâmicos, funções.

Para usá-lo é preciso desestruturar o próprio React para importar o useState

```
import {useState} from 'react'
```

Com isso, é possível alterar os estados. Vejamos um rápido exemplo:

```
import { useState } from 'react';

const Card = () => {

    const [valor, setValor] = useState(0);

    function Adicionar () {
        setValor(valor + 1)
    }

    function Remover () {
        setValor(valor - 1)
    }


    return (
    <div className="card">
        <div className="card-header">
            First React App
        </div>
        <div className="card-body">
            <button className="btn btn-success"
                onClick={Adicionar}
            >
                Adicionar
            </button>
            <button 
                className="btn btn-danger"
                onClick={Remover}    
            >
                Remover
            </button>
            <p className="card-text">{valor}</p>
        </div>
    </div>
    )
}
```

Esse exemplo permite perceber como o estado do valor, que está na tag p, pode mudar de acordo com as funções, desde que o valor seja gerado com o useState.
