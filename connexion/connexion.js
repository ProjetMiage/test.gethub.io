// Controle du formulaire de connexion
var formulaireConnexion = document.getElementById('formulaireIns');
formulaireConnexion.addEventListener('submit' , function(event){
    var emailConnexion = document.getElementById('emailinput');
    var passwordConnexion = document.getElementById('motdepasseinput');
    // Verifier si rien n' a ete saisie
    if(emailConnexion.value.trim() === "" || passwordConnexion.value.trim() === "")
    {
        event.preventDefault(); // Empecher la soumission du formulaire
        alert("Veuiller remplir correctement tous les champs");
    }
});