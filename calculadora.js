 //
 function calcularKV(espessura, constanteAparelho, compensacaoDistancia) {
  let kv = 2 * espessura + constanteAparelho;
  switch (compensacaoDistancia) {
    case "+4kV":
      kv += 4;
      break;
    case "-4kV":
      kv -= 4;
      break;
    default:
      break;
  }
  return kv;
}
    
    function calcularMAS(kV, comBucky) {
      if (comBucky) {
        return kV / 2;
      } else {
        return kV / 3;
      }
    }
  
    document.getElementById("botaoResultado").addEventListener("click", function(event) {
      event.preventDefault();
      // Obtém os valores dos inputs
      var espessura = parseInt(document.getElementById("espessura").value);
      var constanteAparelho = parseInt(document.getElementById("constanteAparelho").value);
      var compensacaoDistancia = document.getElementById("compensacaoDistancia").value;
      var comBucky = document.getElementById("com-bucky").checked;
  
      // Calcula os valores de kV e mAs
      var kV = calcularKV(espessura, constanteAparelho, compensacaoDistancia);
      var mAs = calcularMAS(kV, comBucky);
  
      // Atualiza o conteúdo do elemento #resultado
      document.getElementById("resultado").innerHTML = `kV: ${kV} | mAs: ${mAs}`;
    });
    
  

    document.getElementById("botaoClean").addEventListener("click", function() {
      document.getElementById("espessura").value = "";
      document.getElementById("constanteAparelho").value = "";
      document.getElementById("resultado").innerHTML = "";
    });
    
    