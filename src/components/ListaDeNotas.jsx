import React from "react";
import { Component } from "react";
import CardNota from "./CardNota/CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {console.log("Aqui é um elementro JavaScript!")}
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
          return (
            <li key={index}>

              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
