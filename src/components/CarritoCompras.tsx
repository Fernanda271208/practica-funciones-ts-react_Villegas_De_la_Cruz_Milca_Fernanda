export const CarritoCompras = () => {
    // TODO: Implementar calcularSubtotal(precio, cantidad): number
    // Retorna: precio * cantidad
    const calcularSubtotal = (precio: number, cantidad: number): number =>
        precio * cantidad;

    // TODO: Implementar calcularIVA(subtotal): number
    // Retorna: subtotal * 0.16
    const calcularIVA = (subtotal: number): number => subtotal * 0.16;

    // TODO: Implementar calcularTotal(subtotal): number
    // Retorna: subtotal + calcularIVA(subtotal)
    const calcularTotal = (subtotal: number): number =>
        subtotal + calcularIVA(subtotal);

    // TODO: Implementar formatearPrecio(precio): string
    // Retorna: `$${precio.toFixed(2)}`
    const formatearPrecio = (precio: number): string => `$${precio.toFixed(2)}`;

    const carrito = [
        { producto: "Laptop", precio: 15000, cantidad: 1 },
        { producto: "Mouse", precio: 350, cantidad: 2 },
        { producto: "Teclado", precio: 800, cantidad: 1 },
    ];

    // TODO: Calcular el subtotal general usando .reduce()
    // const subtotal = carrito.reduce(
    //   (acc, item) => acc + calcularSubtotal(item.precio, item.cantidad), 0
    // );
    const subtotal = carrito.reduce(
        (acc, item) => acc + calcularSubtotal(item.precio, item.cantidad),
        0
    );

    return (
        <>
            <h3> Carrito de Compras </h3>
            {carrito.map((item) => (
                <p key={item.producto}>
                    {item.producto} - {formatearPrecio(item.precio)} x {item.cantidad} ={" "}
                    {formatearPrecio(calcularSubtotal(item.precio, item.cantidad))}
                </p>
            ))}
            <hr />
            <p>Subtotal: {formatearPrecio(subtotal)}</p>
            <p>IVA (16%): {formatearPrecio(calcularIVA(subtotal))}</p>
            <p><strong>Total: {formatearPrecio(calcularTotal(subtotal))}</strong></p>
        </>
    );
};
