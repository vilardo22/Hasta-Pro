import React from 'react'
import "./css/form.css"
const Form = () => {
  return (
    <div className="container10">
    <div className="forms">
        <h2 className="titulo3">Prencha seus dados</h2>
            <p>Que entraremos em contato</p>

            <form action="https://api.staticforms.xyz/submit" method='post'className="formulario">
                <label>Nome</label>
                <input type="text" name="name" placeholder='Digite seu nome'/>
                <label>Email</label>
                <input type="email" name="email" placeholder='Digite seu Email'/>
                <label>Telefone</label>
                <input type="text" name="phone" placeholder='Digite seu Telefone'/>
                <button type='submit'>Enviar</button>
                    <input type="hidden" name="accessKey" value="2da9703c-1dab-4c0e-a918-c52f12f54c78"></input>
                    <input type="hidden" name="redirectTo" value="http://localhost:5173/"></input>
            </form>
    <div className="forms"></div>            
    </div>
    </div>
  )
}

export default Form