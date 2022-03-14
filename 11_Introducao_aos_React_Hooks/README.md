# Introdução ao React Hooks

O curso sobrepõe algumas coisas já vistas. Por isso, o que já foi visto não será anotado. 📖

## Testes no React

Usa-se a biblioteca @testing-library/react, nativa do react.

Na nossa aplicação do naruto quotes ficou da seguinte maneira: 

```
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders the app with a button, a quote and a paragraph), () => {
    render (<App />);

    const buttonEl = screen.getByRole('button');
    const imageEl = screen.getByRole('img');
    const textEl = screen.getByRole('p');

    expect(buttonEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();
}
```

## Usando Styled Components

Importar o styled-components na página do component. Criar const para a tag que eu quero. Exemplo:

```
function App() {
    return (
        <Content>
        </Content>
    )
}

const Content = styled.div`
    //csscode
`
```

Dando atenção que a div não vai ser retornada pela função principal do Component, mas o nome do styled component.

## Mockando requisições

Uma biblioteca utilizada para testar se as requisições estão funcionando como o esperado é a msw (Mock Service Worker). No caso do React é utilizado junto com o Jest, que é o testar nativo da testing library.