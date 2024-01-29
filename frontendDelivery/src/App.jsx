import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [selectedFood, setSelectedFood] = useState('');

  const foods = [
    { name: 'Pizza', price: 10 },
    { name: 'Hamburguesa', price: 15 },
    { name: 'Sushi', price: 20 },
  ];

  const sendOrder = async () => {
    const food = foods.find(f => f.name === selectedFood);
    const notificationData = {
      title: "Compra",
      body: `Compra de ${selectedFood} por $${food.price}`,
      email,
      ingreso: food.price
    };

    try {
      await axios.post("http://localhost:8080/api/noti", notificationData);
      alert("Compra realizada con éxito");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{
      display: 'absolute',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <h1>DeliveryFood</h1>
      <input
        style={{ margin: '10px', width: '200px' }}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo electrónico"
      />
      <select
        style={{ margin: '10px', width: '200px' }}
        value={selectedFood}
        onChange={(e) => setSelectedFood(e.target.value)}
      >
        <option value="">Selecciona una comida</option>
        {foods.map(food => (
          <option key={food.name} value={food.name}>{food.name}</option>
        ))}
      </select>
      <button style={{ margin: '10px'}} onClick={sendOrder}>Comprar</button>
    </div>
  );
}

export default App;

