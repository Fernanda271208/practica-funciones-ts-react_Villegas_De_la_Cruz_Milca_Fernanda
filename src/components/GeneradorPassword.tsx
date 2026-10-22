export const GeneradorPassword = () => {
    // TODO: Implementar generarPassword(longitud, incluirNumeros, incluirSimbolos): string
    // 1. Definir strings base: letras, numeros, simbolos
    const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+";

    // 2. Concatenar según las banderas booleanas
    const generarPassword = (
        longitud: number,
        incluirNumeros: boolean,
        incluirSimbolos: boolean
    ): string => {

        // 3. Usar un bucle for para construir la contraseña
        // 4. Usar Math.random() para elegir caracteres aleatorios
        let caracteres = letras;
        if (incluirNumeros) caracteres += numeros;
        if (incluirSimbolos) caracteres += simbolos;

        let password = "";
        for (let i = 0; i < longitud; i++) {
            const indice = Math.floor(Math.random() * caracteres.length);
            password += caracteres[indice];
        }
        return password;

    };

    return (
        <>
            <h3> Generador de Contraseñas </h3>
            <p> Básica (8): {generarPassword(8, false, false)} </p>
            <p> Media (12): {generarPassword(12, true, false)} </p>
            <p> Fuerte (16): {generarPassword(16, true, true)} </p>
        </>
    );
};
