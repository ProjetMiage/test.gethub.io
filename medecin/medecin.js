
// Controle du formulaire de connexion
var formulaireConnexion = document.getElementById('formulaire');
formulaireConnexion.addEventListener('submit' , function(event){
    var emailConnexion = document.getElementById('emailinput');
    var passwordConnexion = document.getElementById('passwordinput');
    // Verifier si rien n' a ete saisie
    if(emailConnexion.value.trim() === "" || passwordConnexion.value.trim() === "")
    {
        event.preventDefault(); // Empecher la soumission du formulaire
        alert("Veuiller remplir correctement tous les champs");
    }
})

// Controle du formulaire d'inscription

var formulaireInscription = document.getElementById('formulaireIns');
formulaireInscription.addEventListener('submit' , function(event){
    var emailInscription = document.getElementById('emailinput');
    var passwordInscription = document.getElementById('passwordinput');
    var prenomInscription = document.getElementById('prenominput');
    var nomInscription = document.getElementById('nominput');
    var mobileInscription = document.getElementById('mobileinput');
    var sexeIncription = document.getElementById('sexeinput');
    var regionInscription = document.getElementById('regioninput');
    var specialiteInscription = document.getElementById('spécialitéselect');
    var heuredebutInscription = document.getElementById('timeinput');
    var heurefinInscription = document.getElementById('timeinput');
    var conditionInscription = document.getElementById('condition');
    // Verifier si rien n' a ete saisie
    if(emailInscription.value.trim() === "" || passwordInscription.value.trim() === "" || prenomInscription.value.trim() === "" || nomInscription.value.trim() === "" || mobileInscription.value.trim() === "" || sexeIncription.value.trim() === "" || regionInscription.value.trim() === "" || specialiteInscription === "" || heuredebutInscription === "" || heurefinInscription === "" || !conditionInscription.checked)
    {
        event.preventDefault(); // Empecher la soumission du formulaire
        alert("Veuiller remplir correctement tous les champs");
    }
});













/*

function validation(){
    let formulaire= document.getElementById("formulaire");
    let champemail= document.getElementById("emailinput");
    let champmdp= document.getElementById("passwordinput");

    formulaire.addEventListener("submit",function(event){
        if (!champemail.checkValidity() || !champmdp.checkValidity())
        event.preventDefault();
    alert("veuillez remplir correctement tous les champs !")
    });
}
*/