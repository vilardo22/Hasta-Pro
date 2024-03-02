import React from 'react'
import logoBc from "./assets/logobc.png"
const Sistema = () => {
  return (
    <div className="container-3">
        <div className="title">
            <h1>Sistema</h1>
        </div>
        <div className="container-cards">
            <div className="card1">
                <h2>Lorem Ipsun</h2>
                <img src={logoBc} alt="" />
                    <ul className="lista">
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                    </ul>
                
            </div>
            <div className="card2">
            <h2>Lorem Ipsun</h2>
            <img src={logoBc} alt="" />
            <ul className="lista">
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                    </ul>
            </div>
            <div className="card3">
            <h2>Lorem Ipsun</h2>
            <img src={logoBc} alt="" />
            <ul className="lista">
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                    </ul>
            </div>
        </div>
    </div>
  )
}

export default Sistema