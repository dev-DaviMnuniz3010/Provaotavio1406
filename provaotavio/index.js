
//1) Funcao de numeros primos e lista dos numeros primos

//  -Funcao numeros primos
function primo(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  //  -funcao listar numeros primos
  function listarPrimos() {
    const primos = [];
  
    for (let i = 1; i <= 1000; i++) {
      if (primo(i)) {
        primos.push(i);
      }
    }
  
    return primos;
  }

  //2) Validar senha 


  function validarSenha(senha) {
    if (senha.length < 8) {
      return false;
    }
    
    var Maiuscula = false;
    var Minuscula = false;
    var Numero = false;
    
    for (var i = 0; i < senha.length; i++) {
      var caractere = senha.charAt(i);
      
      if (caractere >= 'A' && caractere <= 'Z') {
        Maiuscula = true;
      } else if (caractere >= 'a' && caractere <= 'z') {
        Minuscula = true;
      } else if (!isNaN(caractere)) {
        Numero = true;
      }
      
      if (Maiuscula && Minuscula && Numero) {
        break;
      }
    }
    
    return Maiuscula && Minuscula && Numero;
  }

  //3) Calcular fatoriais e listar os de 1 a 10

// - funcao de calcular fatoriais
  function calcularFatorial(numero) {
    if (numero < 0) {
      return "O número deve ser não negativo.";
    }
    
    let fatorial = 1;
    
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    
    return fatorial;
  }
  //- funcao de listar fatoriais de 1 a 10
  function calcularFatoriaisDe1A10() {
    const fatoriais = [];
    
    for (let i = 1; i <= 10; i++) {
      fatoriais.push(calcularFatorial(i));
    }
    
    return fatoriais;
  }

  //4) Ver c o numero é um quadrado perfeito


  function quadradoPerfeito(number) {
    if (number < 0) {
      return false;
    }
    const squareRoot = Math.sqrt(number);
    return squareRoot === Math.floor(squareRoot);
  }