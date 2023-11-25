import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  resultado: string = "0";
  primeiro_elemento: string = "";
  segundo_elemento: string = "";
  operador_selecionado: boolean = false;
  operando: string = "";
  porcentagem: string = "100";
  fracao_num: string ="1";
 

  constructor() {}

  digito(valor: string) {

    if (this.operador_selecionado == false) {
      if (this.resultado == "0") {
        this.resultado = valor;
      } else {
        this.resultado += valor;
      }
    } else {
      this.segundo_elemento = this.segundo_elemento + valor;
      this.resultado = this.resultado + valor;
    }


  }

  operador(operador_calculadora: string) {
    if (this.operador_selecionado == false) {
      this.primeiro_elemento = this.resultado;
      this.resultado = this.resultado + operador_calculadora;
      this.operador_selecionado = true;
      this.operando = operador_calculadora;
    } else {
      console.log("Um operador já foi selecionado");
    }


  }

  fracao() {
    if (this.operador_selecionado == false) {
      this.primeiro_elemento = this.resultado;
      if (parseInt(this.primeiro_elemento) !== 0) {
        this.operador_selecionado = true;
        this.operando = "1/x";
        this.resultado = (1 / parseInt(this.primeiro_elemento)).toString();
      } else {
        this.resultado = "0"; }
    } else {
      console.log("Um operador já foi selecionado");
    }
  }

  raiz(){
    if (this.operador_selecionado == false) {
      this.primeiro_elemento = this.resultado;
      const numero = parseFloat(this.primeiro_elemento); // "25" > 25
  
      if (numero >= 0) {
        this.resultado = Math.sqrt(numero).toString();
      } else {
        this.resultado = "0";
      }
    } else {
      console.log("Um operador já foi selecionado");
    }
  }

  potencia(){
    if (this.operador_selecionado == false) {
      this.primeiro_elemento = this.resultado;
     if (parseInt(this.primeiro_elemento) !== 0) {
        this.operador_selecionado = true;
        this.operando = "X²";
        this.resultado = (parseInt(this.primeiro_elemento) * parseInt(this.primeiro_elemento)).toString();
      } else {
        this.resultado = "1"; }  
  } else {
    console.log("Um operador já foi selecionado");
  }
}

  

  calcular() {
    if (this.operando == "+") {
      this.resultado = (parseInt(this.primeiro_elemento) + parseInt(this.segundo_elemento)).toString();
    } else if (this.operando == "-") {
      this.resultado = (parseInt(this.primeiro_elemento) - parseInt(this.segundo_elemento)).toString();
    } else if (this.operando == "/") {
      this.resultado = (parseInt(this.primeiro_elemento) / parseInt(this.segundo_elemento)).toString();
    } else if (this.operando == "*"){
      this.resultado = (parseInt(this.primeiro_elemento) * parseInt(this.segundo_elemento)).toString();
    } else if (this.operando == "%"){
      this.resultado = (parseInt(this.primeiro_elemento) * parseInt(this.segundo_elemento) / parseInt(this.porcentagem)).toString();
    }
  }


  redefinir() {
    this.resultado = "0";
    this.primeiro_elemento = "";
    this.segundo_elemento = "";
    this.operando = "";
    this.operador_selecionado = false;
    this.porcentagem = "100";
    this.fracao_num = "1";
  
  }
}

  
