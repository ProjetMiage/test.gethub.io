// Controle du formulaire de connexion
var formulaireConnexion = document.getElementById('formulaireIns');
formulaireConnexion.addEventListener('submit' , function(event){
    var emailConnexion = document.getElementById('emailinput');
    var nomConnexion = document.getElementById('nominput');
    var prenomConnexion = document.getElementById('prenominput');
    var avisConnexion = document.getElementById('commentaire')
    // Verifier si rien n' a ete saisie
    if(emailConnexion.value.trim() === "" || nomConnexion.value.trim() === "" || prenomConnexion.value.trim() === "" || avisConnexion.value.trim() === "" )
    {
        event.preventDefault(); // Empecher la soumission du formulaire
        alert("Veuiller remplir correctement tous les champs");
    }
});