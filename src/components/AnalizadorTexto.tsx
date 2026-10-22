export const AnalizadorTexto = () => {
    const contarPalabras = (texto: string): number => {

        // Pista: usar texto.trim().split(/\s+/)
        const limpio = texto.trim();
        if (limpio === "")
            return 0;
        return limpio.split(/\s+/).length;
    }

    // TODO: Implementar contarVocales(texto): number
    const contarVocales = (texto: string): number => {
        const coincidencias = texto.match(/[aeiouáéíóú]/gi);
        return coincidencias ? coincidencias.length : 0;
    };

    // TODO: Implementar invertirTexto(texto): string
    // Pista: usar split('').reverse().join('')
    const invertirTexto = (texto: string): string => {
        return texto.split("").reverse().join("");
    }

    const texto = "Hola mundo desde TypeScript";

    return (
        <>
            <h3> Analizador de Texto </h3>
            <p> Texto: "{texto}" </p>
            <p> Palabras: {contarPalabras(texto)} </p>
            <p> Vocales: {contarVocales(texto)} </p>
            <p> Invertido: {invertirTexto(texto)} </p>
        </>
    );
};
