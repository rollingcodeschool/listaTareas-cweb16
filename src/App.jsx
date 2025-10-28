import FormularioTarea from "./components/FormularioTarea";

function App() {
  return (
    <>
    <main className="container py-5">
      <h1 className="text-center text-light">Bienvenidos</h1>
      {/* aqui agrego el resto de los componentes */}
      <FormularioTarea></FormularioTarea>
    </main>
    </>
  );
}

export default App;
