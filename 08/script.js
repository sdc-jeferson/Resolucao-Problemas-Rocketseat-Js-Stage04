/*
    Crie uma lista de pacientes

    Cada peciente dentro da lista deverá conter :
    - Nome
    - Idade
    - Peso
    - Altura

    Escreva a lista contendo o nome dos pacientes suas idadesm alturas e pesos.
*/



const listPacient = [
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

let patientNames = []
let patientWeight = []
let patientAge = []
let patientHeight = []



for(let patient of listPacient){
    patientNames.push(patient.name)
    patientAge.push(patient.age)
    patientWeight.push(patient.weight)
    patientHeight.push(patient.height)
}

alert(`${patientNames[0]} tem ${patientAge[0]} anos de idade pesa ${patientWeight[0]}kg e possui uma altura de ${patientHeight[0]}cm`)

alert(`${patientNames[1]} tem ${patientAge[1]} anos de idade pesa ${patientWeight[1]}kg e possui uma altura de ${patientHeight[1]}cm`)


alert(`${patientNames[2]} tem ${patientAge[2]} anos de idade pesa ${patientWeight[2]}kg e possui uma altura de ${patientHeight[2]}cm`)




