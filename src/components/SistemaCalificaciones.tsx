export const SistemaCalificaciones = () => {
    // TODO: Implementar calcularPromedio(calificaciones: number[]): number
    // Pista: usar reduce y dividir entre la longitud

    const calcularPromedio = (calificaciones: number[]): number => {
        if (calificaciones.length === 0)
            return 0;
        return (
            calificaciones.reduce((acc, c) => acc + c, 0) / calificaciones.length
        );
    };

    // TODO: Implementar obtenerLetra(promedio: number): string
    // >= 90 → "A" | >= 80 → "B" | >= 70 → "C" | >= 60 → "D" | < 60 → "F"

    const obtenerLetra = (promedio: number): string => {
        if (promedio >= 90) return "A";
        if (promedio >= 80) return "B";
        if (promedio >= 70) return "C";
        if (promedio >= 60) return "D";
        return "F";
    }

    // TODO: Implementar estaAprobado(promedio: number): boolean
    // Retorna true si promedio >= 70

    const estaAprobado = (promedio: number): boolean => promedio >= 70;

    const alumnos = [
        { nombre: "Ana", califs: [95, 88, 92] },
        { nombre: "Luis", califs: [70, 65, 72] },
        { nombre: "María", califs: [85, 90, 88] },
    ];

    return (
        <>
            <h3>Sistema de Calificaciones</h3>
            {alumnos.map((alumno) => {
                {/* 1. Calcular el promedio */ }
                {/* 2. Obtener la letra */ }
                {/* 3. Verificar si está aprobado */ }
                {/* 4. Mostrar: nombre, promedio (1 decimal), letra y estado */ }

                const promedio = calcularPromedio(alumno.califs);
                const letra = obtenerLetra(promedio);
                const aprobado = estaAprobado(promedio);

                return (
                    <p key={alumno.nombre}>
                        <strong> {alumno.nombre} </strong> - Promedio: {promedio.toFixed(1)} |
                        Letra: {letra} | {aprobado ? "Aprobado ✅" : "Reprobado ❌"}
                    </p>
                );
            })}
        </>
    );
};
