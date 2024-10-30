document.getElementById('formCalc').addEventListener('submit', function(event) {

  // Obter os valores dos campos do formulário
  const idade = parseFloat(document.getElementById('inputIdade').value);
  const altura = parseFloat(document.getElementById('inputAltura').value) / 100; // Convertendo para metros
  const peso = parseFloat(document.getElementById('inputPeso').value);
  const pesoDesejado = parseFloat(document.getElementById('inputPesoDesejado').value);
  const genero = document.querySelector('input[name="gender"]:checked').id;

  // Cálculo do IMC
  const imc = peso / (altura * altura);

  // Cálculo das calorias diárias
  let caloriasDiarias = 0;
  if (genero === 'Masculino') {
    caloriasDiarias = 10 * pesoDesejado + 6.25 * altura * 100 - 5 * idade + 5;
  } else if (genero === 'Femenino') {
    caloriasDiarias = 10 * pesoDesejado + 6.25 * altura * 100 - 5 * idade - 161;
  }

  // Cálculo da quantidade de água
  const quantidadeAgua = peso * 0.035; // Supõe-se 35 ml de água por kg de peso

  // Cálculo das proteínas, gorduras e carboidratos
  const caloriasProteinas = 0.15 * caloriasDiarias;
  const caloriasGorduras = 0.25 * caloriasDiarias;
  const caloriasCarboidratos = 0.6 * caloriasDiarias;

  // Convertendo calorias para gramas (1g de proteína/carboidrato = 4 calorias, 1g de gordura = 9 calorias)
  const gramasProteinas = caloriasProteinas / 4;
  const gramasGorduras = caloriasGorduras / 9;
  const gramasCarboidratos = caloriasCarboidratos / 4;

  // Saída dos resultados
  console.log('Calorias Diárias:', caloriasDiarias.toFixed(1), 'cal');
  console.log('Gorduras Diárias:', gramasGorduras.toFixed(1), 'g');
  console.log('Proteínas Diárias:', gramasProteinas.toFixed(1), 'g');
  console.log('Carboidratos Diários:', gramasCarboidratos.toFixed(1), 'g');
  console.log('Quantidade de Água:', quantidadeAgua.toFixed(1), 'ml');
  console.log('IMC:', imc.toFixed(1));


  localStorage.setItem('caloriasDiarias', caloriasDiarias.toFixed(1));
  localStorage.setItem('descCaloriasDiarias', caloriasDiarias.toFixed(1));

  localStorage.setItem('gramasGorduras', gramasGorduras.toFixed(1));
  localStorage.setItem('descGramasGorduras', gramasGorduras.toFixed(1));

  localStorage.setItem('gramasProteinas', gramasProteinas.toFixed(1));
  localStorage.setItem('descGramasProteinas', gramasProteinas.toFixed(1));

  localStorage.setItem('gramasCarboidratos', gramasCarboidratos.toFixed(1));
  localStorage.setItem('descGramasCarboidratos', gramasCarboidratos.toFixed(1));

  localStorage.setItem('quantidadeAgua', quantidadeAgua.toFixed(1));
  localStorage.setItem('descQuantidadeAgua', quantidadeAgua.toFixed(1));

  localStorage.setItem('resultadoIMC', imc.toFixed(1));
  localStorage.setItem('statusIMC', imc.toFixed(1));
});