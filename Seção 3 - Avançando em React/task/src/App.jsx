import './App.css';

import MKAssets from './assets/MK-Assets.png';
import ManageData from './components/ManageData';
import ListRender from './components/listRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import {useState } from 'react';
import CarDetails from './components/CarDetais';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';


function App() {

 // const name = "Joaquim"
  const [userName] = useState("Maria")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 3454},
  ];

  const users = [
    {id: 1, name: "Matheus", age: 26, profession: "IT"},
    {id: 2, name: "John", age: 14, profession: "None"},
    {id: 3, name: "Peter", age: 44, profession: "Actor"},
    {id: 4, name: "Jeremy", age: 15, profession: "None"},
  ]

  function showMessage() {
    console.log("Evento do componente pai!")
  }


  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public - Dá para acessar diretamente pela barra */}
      <div>
          <img src="/MK-Public.png" alt="Mortal Kombat" width="250"/>
      </div>  
      {/* Imagem em asset */}
      <div>
           <img src={MKAssets} alt="Mortal Kombat" width="250"/>
      </div>
    
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/** props */}
      <ShowUserName name={userName}/>
        {/** destructuring */}
        <CarDetails brand="VW" KM={100000} color="Azul" newCar={false}/>
        {/** Reaproveitamento */ }
        <CarDetails brand="Ford" KM={0} color="Vermelha" newCar={true}/>
        <CarDetails brand="Fiat" KM={4500} color="Branco" newCar={false}/>

        {/* loop em array de objeto */}
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
        ))}
        {/** fragment*/}
        <Fragment propFragment="teste"/>
        {/** children*/}
        <Container myValue="testing">
          <p>E este é o conteúdo</p>
        </Container>

        <Container myValue="testing 2">
          <p>E este é o conteúdo</p>
          <h5>Testando o container</h5>
        </Container>
        {/* Executar função */}
        <ExecuteFunction myFunction={showMessage}/>
        {/* State Lift */}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>
        {/*Desafio*/}
        {users.map((user) => (
           <UserDetails
           key={user.id}
           name={user.name}
           job={user.job}
           age={user.age}
           />
        ))}

    </div>
  );
}

export default App;
