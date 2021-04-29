// exo1
let charles = {
    nom: "de Lalaing",
    prenom: "Charles",
    sePresenter(){
        console.log(`Bonjour je m'apelle ${this.nom} ${this.prenom}`);
    }
}
charles.sePresenter()

// exo2
let obj = {
    nom: "chose",
    laMethodeDrare(){
        this.age = prompt ("Met ton âge");
        alert (this.nom + " a " + this.age + " ans");
    }
}
obj.laMethodeDrare()
console.log(obj);