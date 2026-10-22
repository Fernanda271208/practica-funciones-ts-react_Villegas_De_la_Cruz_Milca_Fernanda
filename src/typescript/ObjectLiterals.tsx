export const ObjectLiterals = () => {

  interface Person {
    firstNmae: string;
    lastName: string;
    age: number;
    address: Address;
  }

  interface Address {
    country: string;
    houseNo: string;
    street?: string; //Es opcional, se coloca antes de los dos puntos.
  }

  const person: Person = {
    firstNmae: 'Fernanda',
    lastName: 'Bond',
    age: 19,
    address: {
      country: 'England',
      houseNo: '612',
      street: 'Siempre Viva'
    }
  };
  return (
    <>
      <h3> Objetos Literales</h3>

      <pre>
        {JSON.stringify(person, null, 2)}
      </pre>
    </>
  );
};
