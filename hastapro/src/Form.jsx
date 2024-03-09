import React from 'react'
import "./css/form.css"
const Form = () => {
  return (
    <div className="container10">
        <h1 className="titulo3">Prencha seus dados</h1>
            <p>Que entraremos em contato</p>

            <form action="" method='post'className="formulario">
                <label>Nome</label>
                <input type="text" name="name" placeholder='Digite seu nome'/>
                <label>Email</label>
                <input type="email" name="email" placeholder='Digite seu Email'/>
                <label>Telefone</label>
                <input type="number" name="number" placeholder='Digite seu Telefone'/>
                <button type='submit'>Enviar</button>
            </form>
    <div className="forms"></div>            
    </div>
  )
}

export default Form