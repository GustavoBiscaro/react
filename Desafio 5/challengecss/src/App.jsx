import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 3454},
  ];


  return (
    <div>
      <h1>Desafio CSS</h1>
       {/* loop em array de objeto */}
       {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
        ))}
    </div>
  );
}

export default App;
