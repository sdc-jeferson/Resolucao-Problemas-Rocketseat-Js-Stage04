/*
    Dada uma lista de pacientes, descubra qual o IMC de cada paciente e imprima.

    "Paciente X possui o IMC de: Y"

    Onde X é o nome do paciente e Y é o IMC desse paciente

    Crie uma função para fazer o cálculo de IMC

    Sendo : IMC = Peso ÷ (Altura × Altura)
*/



const patients = [

    {
        name : "jeff",
        age : 22,
        weight : 80,
        height : 175
    },
    {
        name : "Marta",
        age : 30,
        weight : 50,
        height : 155
    },
    {
        name : "Geovanna",
        age : 21,
        weight : 100,
        height : 185
    },
    
];

function IMC (weight, height){
    return (weight / ((height / 100) ** 2)).toFixed(2);
}


//Criação da arrow function, geralmente criada para Constantes.
const printPatientIMC = (patients) => {

    return (`Paciente ${patients.name} possui o IMC de : ${IMC(patients.weight, patients.height)}`);
}

for (let patient of patients){
    let messageIMC = (printPatientIMC(patient))
    alert(messageIMC);
}
