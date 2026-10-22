//import { ObjectLiterals } from './typescript/ObjectLiterals'
//import { BasicTypes } from './typescript/BasicTypes'
//import { BasicFunctions } from './typescript/BasicFunctions'
//import { Counter } from "./components/Counter"

import { Calculadora } from "./components/Calculadora"
import { ConversorTemperaturas } from "./components/ConversorTemperaturas"
import { CalculadoraIMC } from "./components/CalculadoraIMC"
import { ValidadorEdad } from "./components/ValidadorEdad"
import { AnalizadorTexto } from "./components/AnalizadorTexto"
import { EstadisticasArreglo } from "./components/EstadisticasArreglo"
import { GeneradorPassword } from "./components/GeneradorPassword"
import { AplicadorDescuentos } from "./components/AplicadorDescuentos"
import { SistemaCalificaciones } from "./components/SistemaCalificaciones"
import { CarritoCompras } from "./components/CarritoCompras"

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-svh bg-pink-400">
      <h1 className="text-3xl font-bold underline"> TypeScript + React </h1>

      <section className="w-full max-w-md text-center py-8 [&_h3]:text-2xl border-t-4 border-pink-600/50">
        <Calculadora />
      </section>

      <section className="w-full max-w-md text-center py-8 [&_h3]:text-2xl border-t-4 border-pink-600/50">
        <ConversorTemperaturas />
      </section>

      <section className="w-full max-w-md text-center py-8 [&_h3]:text-2xl border-t-4 border-pink-600/50">
        <CalculadoraIMC />
      </section>

      <section className="w-full max-w-md text-center py-8 [&_h3]:text-2xl border-t-4 border-pink-600/50">
        <ValidadorEdad />
      </section>

      <section className="w-full max-w-md text-center py-8 [&_h3]:text-2xl border-t-4 border-pink-600/50">
        <AnalizadorTexto />
      </section>

      <section className="w-full max-w-md text-center py-8 [&_h3]:text-2xl border-t-4 border-pink-600/50">
        <EstadisticasArreglo />
      </section>

      <section className="w-full max-w-md text-center py-8 [&_h3]:text-2xl border-t-4 border-pink-600/50">
        <GeneradorPassword />
      </section>

      <section className="w-full max-w-md text-center py-8 [&_h3]:text-2xl border-t-4 border-pink-600/50">
        <AplicadorDescuentos />
      </section>

      <section className="w-full max-w-md text-center py-8 [&_h3]:text-2xl border-t-4 border-pink-600/50">
        <SistemaCalificaciones />
      </section>

      <section className="w-full max-w-md text-center py-8 [&_h3]:text-2xl border-t-4 border-pink-600/50">
        <CarritoCompras />
      </section>

    </div>
  )
}

export default App