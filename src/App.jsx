import FormularioTarea from "./components/FormularioTarea";
import imagen from './img/paisaje.jpeg'
function App() {
  return (
    <>
    <main className="container py-5">
      <img src="https://images.pexels.com/photos/34350110/pexels-photo-34350110.jpeg" alt="paisaje" className="img-fluid" />
      <img src={imagen} alt="paisaje 2" className="img-fluid" />
      <h1 className="text-center text-light">Bienvenidos</h1>
      {/* aqui agrego el resto de los componentes */}
      <FormularioTarea></FormularioTarea>
    </main>
    </>
  );
}

export default App;
