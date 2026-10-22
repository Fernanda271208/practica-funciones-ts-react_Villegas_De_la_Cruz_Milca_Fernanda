export const EstadisticasArreglo = () => {

    // TODO: Implementar calcularPromedio(nums): number
    // Pista: usar reduce para sumar y dividir entre nums.length
    const calcularPromedio = (nums: number[]): number => {
        if (nums.length === 0)
            return 0;
        return nums.reduce((acc, n) => acc + n, 0) / nums.length;
    }

    // TODO: Implementar encontrarMaximo(nums): number
    // Pista: usar Math.max(...nums)

    // TODO: Implementar encontrarMinimo(nums): number
    // Pista: usar Math.min(...nums)

    const encontrarMaximo = (nums: number[]): number => Math.max(...nums);
    const encontrarMinimo = (nums: number[]): number => Math.min(...nums);

    const numeros = [8, 3, 15, 7, 22, 11, 4];

    return (
        <>
            <h3>Estadísticas</h3>
            <p>Números: [{numeros.join(', ')}]</p>
            <p>Promedio: {calcularPromedio(numeros).toFixed(2)}</p>
            <p>Máximo: {encontrarMaximo(numeros)}</p>
            <p>Mínimo: {encontrarMinimo(numeros)}</p>
        </>
    );
};
