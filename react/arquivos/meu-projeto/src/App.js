
import './App.css';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <Pessoa nome="Teddy Hawkings" idade="71" poder="Magia Verde" foto="https://images.pexels.com/photos/2839371/pexels-photo-2839371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <Pessoa nome="Han Saw" idade="67" poder="Infiltration Facilited" foto="https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </div>
  );
}

export default App;
