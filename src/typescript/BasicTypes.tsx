export const BasicTypes = () => {

	const name: string = 'Fernanda';
	const age: number = 20;
	const isStudent: boolean = false;

	const superHeroes = ['Superman', 'Spiderman', 'Batman', 'Mujer maravilla'];

	return (
		<>
			<h3> Tipos Basicos</h3>
			{name} - {age} - {isStudent ? 'Es un estudiante' : 'No es un estudiante'}

			<p>
				{superHeroes.join(', ')}
			</p>
		</>)
}