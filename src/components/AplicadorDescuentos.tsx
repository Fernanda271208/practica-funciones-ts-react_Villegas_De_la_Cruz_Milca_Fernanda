export const AplicadorDescuentos = () => {
    // TODO: Implementar aplicarDescuento(precio, calcularDescuento): number
    // Retorna: precio - calcularDescuento(precio)
    // IMPORTANTE: el segundo parámetro es una FUNCIÓN (callback)

    const aplicarDescuento = (
        precio: number,
        calcularDescuento: (p: number) => number
    ): number => precio - calcularDescuento(precio);

    // TODO: Implementar las 3 funciones de descuento:

    const descuento10 = (p: number): number => p * 0.10;
    const descuento25 = (p: number): number => p * 0.25;
    const descuentoEstudiante = (p: number): number => p * 0.15;

    const precio = 1000;

    return (
        <>
            <h3> Aplicador de Descuentos </h3>
            <p> Precio original: ${precio} </p>
            <p> Con 10% off: ${aplicarDescuento(precio, descuento10)} </p>
            <p> Con 25% off: ${aplicarDescuento(precio, descuento25)} </p>
            <p> Descuento estudiante: ${aplicarDescuento(precio, descuentoEstudiante)} </p>
        </>
    );
};
