const addTwoNumbers = (a: number, b: number): string => {
    return `${a + b}`;
}

const triple = (a: number): string => {
    return `${a * 3}`;
}

export const BasicFunctions = () => {

    return (
        <>
            <h3> Funciones Basicas</h3>
            <span> el resultado de sumar 2 + 8 = {addTwoNumbers(2, 8)} </span>

            <span> el triple de 5 = {triple(5)}</span>
        </>
    )
}