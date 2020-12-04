import React, { Component } from 'react';
import Data from '../../Data/data.json';
import Header from '../Header/Header';

import './Content-Click.css';


class Info extends React.Component {
 
    render() {
        return (

            <div className="bgc-info">
              <Header />
                {Data.map((Detail, index)=>{
                    return <div>
                    <img className="content-photo" src={Detail.photo}></img>
                    <p className="info-title">{Detail.name}</p> 
                    <div className="infos"> 
                        <p>Calorias<span className="text-space">{Detail.calories}</span></p>
                        <p>Proteínas<span className="text-space">{Detail.protein}</span></p>
                        <p>Carboidratos<span className="text-space">{Detail.carbohydrates}</span></p>
                        <p>Fibra<span className="text-space">{Detail.fiber}</span></p>
                        <p>Gordura<span className="text-space">{Detail.blubber}</span></p>
                        <p>Porção<span className="text-space">{Detail.portion}</span></p>
                    </div>
                    </div>
                })}
            </div>
        );
    }
}

export default Info;

