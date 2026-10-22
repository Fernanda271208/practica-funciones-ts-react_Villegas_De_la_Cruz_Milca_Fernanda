export const ValidadorEdad = () => {
    const esMayorDeEdad = (edad: number): boolean => edad >= 18;
    // Retorna true si edad >= 18

    const obtenerMensaje = (edad: number): string => {
        if (esMayorDeEdad(edad))

            // Si es mayor → "Puede votar"
            return "Puede votar";

        // Si es menor → `Le faltan ${18 - edad} años`
        return `Le faltan ${18 - edad} años`;
    }


    const edades = [15, 18, 25, 12];

    return (
        <>
            <h3> Validador de Edad </h3>

            {edades.map((edad, i) => (
                <p key={i}>
                    Edad {edad}: {obtenerMensaje(edad)}
                </p>
            ))}
        </>
    );
};
