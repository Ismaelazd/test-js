// Ex 2
let maBoolean = true;
// Ex 3
let monArray = [1, 2, 3];
// Ex 4
let monObjet = {
    nom: 'Azoud',
    prenom: 'Ismael',
    age: 23
};
// Ex 5
let monString = 'Hello World!'
// Ex 6
let monInt = 0;
// Ex 7
let personne = {
    prenom: 'Ismael',
    endormi: true,
    seRéveiller() {
        this.endormi = false
        console.log(`${this.prenom} est reveillé`);
    }
}

// Ex 8
const somme = (a, b) => {
    return a + b
}
// Ex 9
const plusPetitQue8 = (nb) => {
    let petit;
    if (nb < 8) {
        petit = true
    } else {
        petit = false
    }
    return petit
}
// Ex 10
for (let i = 0; i < 9; i++) {
    console.log(monInt);
    monInt++

}
console.log(monInt);
// Ex 11
let date = new Date().toLocaleDateString()

console.log(date);
// Ex 12
const toUpper = (mot) => {
    mot = mot.toUpperCase()
    console.log(mot);
}

toUpper('ismael')

// Ex 13
const toUpperStartEnd = (chaine) => {
    return chaine.charAt().toUpperCase() + chaine.substring(1, chaine.length - 1).toLowerCase() + chaine.charAt(chaine.length - 1).toUpperCase()
}
console.log(toUpperStartEnd('ismael'));

// Ex 14
const longueur = (chaine) => {
    alert(`La taille de la chaine est de ${chaine.length}`)
}
//longueur('Salut la miff')

// Ex 15
const aleatoireP1 = () => {
    alert(Math.floor(Math.random() * 100))
}
//aleatoireP1()

// Ex 16
const aleatoireP2 = () => {
    
    

    // alert( Math.floor(Math.random() * (max - min + 1)) + min)
}
aleatoireP2()

// Ex 17


// Ex 18

let obj1 = {
    nom: '',
    age: 0,
    modeling(){
        this.nom = 'Ismael'
        this.age = 23
        alert(`Bonjour ${this.nom} tu as ${this.age} ans`)
    }
}

// Ex 19
let obj2 = {
    addKey(){
        this.nom = 'Ismael'
        this.age = 23
        console.log(obj1);
        
    }
}
obj2.addKey()
console.log(obj2);

// Ex 20
let carre = {
    size:'',
    borderaspect:'',
    epaisseur:'',
    couleur:'',
    addKey(){
        this.size = 54
        this.borderaspect = 'solid'
        this.epaisseur = 4
        this.couleur = 'blue'
        if((Number.isInteger(this.size)) && (Number.isInteger(this.epaisseur)) && (!(this.borderaspect === 'solide'))){
            
            
        }
        
    }
}
carre.addKey()
console.log(carre);
