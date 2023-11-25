import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';

function App() {
  const [messageSent, setMessageSent] = useState(false);

  const myForm = (e) => {
    e.preventDefault();
    setMessageSent(true);
  };

  return (
    <div className='page'>
    <div className='formDiv'>
      <h2>Şərh formu </h2>
      <form onSubmit={myForm}>
        <Form />
        <br />
        <button>Göndər</button>
      </form>
      {messageSent && <p>Mesaj müvəffəqiyyətlə göndərildi!</p>}
    </div>
    </div>
  );
}

export default App;
