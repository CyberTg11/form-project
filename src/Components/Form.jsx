import React from 'react'
const Form = () => {
  return (
    <div>
      <label>Ad</label>
      <br/>
      <input type='text' required/>
      <br/>
      <br/>
      <label>Soyad</label>
      <br/>
      <input type='text' required/>
      <br/>
      <br/>
      <label>Telefon</label>
      <br/>
      <input required/>
      <br/>
      <br/>
      <label>E-mail</label>
      <br/>
      <input type='email' required/>
      <br/>
      <br/>
      <label>Şərh</label>
      <br/>
      <input required/>
      <br/>
      <br/>
    </div>
  )
}


export default Form