function CalculadoraService() {

    const SOMA = '+';
    const SUBTRACAO = '-';
    const DIVISAO = '/';
    const MULTIPLICACAO = '*';

    function calcular(numero1, numero2, operacao) {

        let resultado;

        switch(operacao) {
            case SOMA:
                resultado = numero1 + numero2;
                break;
            case SUBTRACAO:
                resultado = numero1 - numero2;
                break;
            case DIVISAO:
                resultado = numero1 / numero2;
                break;
            case MULTIPLICACAO:
                resultado = numero1 * numero2;
                break;
            default:
                resultado = 0;
        }

        return resultado;
    }

    function concatenaNumero(numeroAtual, numeroConcat) {
        // caso contenha '0' ou null, reinicia o valor
        if (numeroAtual === '0' || numeroAtual === null) {
          numeroAtual = '';
        }
    
        // precisa digitar '.', concatena 0 antes do ponto
        if (numeroConcat === '.' && numeroAtual === '') {
          numeroAtual = '0.';
        }
    
        if (numeroConcat === '.' && numeroAtual.indexOf('.') > -1) {
          return numeroAtual;
        }
    
        return numeroAtual + numeroConcat;
    
        // caso '.' digitado e já contenha um ponto, apenas retorna
      }

    // retorna uma referência do calcular
    return [
        calcular,
        concatenaNumero,
        SOMA,
        SUBTRACAO,
        DIVISAO,
        MULTIPLICACAO
    ];

}

export default CalculadoraService;