import { useState } from 'react';

export default function Button(props) {
    const [soma, setSoma] = useState(1);

    function incrementar() {
        setSoma(soma + 1);
    }

    return (
        <>
        <span>{soma}</span>
        <button onClick={incrementar}>{props.children}</button>
        <br />
        </>
    )
}

/* conceito de estado(state)

    nao funciona
    let count = 1;

    function increment() {
        count = count + 1;
        console.log(count);
    }

*/

/* Acessando propriedade pai
<button>{props.title}</button>

Acessando propriedade filho
<button>{props.children}</button>
*/
