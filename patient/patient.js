// Controle du formulaire d'inscription

var formulaireInscription = document.getElementById('formulaireIns');
formulaireInscription.addEventListener('submit' , function(event){
    var emailInscription = document.getElementById('emailinput');
    var passwordInscription = document.getElementById('motdepasseinput');
    var prenomInscription = document.getElementById('prenominput');
    var nomInscription = document.getElementById('nominput');
    var mobileInscription = document.getElementById('mobileinput');
    var sexeIncription = document.getElementById('sexeselect');
    var conditionInscription = document.getElementById('condition');
    // Verifier si rien n'a ete saisie
    if(emailInscription.value.trim() === "" || passwordInscription.value.trim() === "" || prenomInscription.value.trim() === "" || nomInscription.value.trim() === "" || mobileInscription.value.trim() === "" || sexeIncription.value.trim() === "" || !conditionInscription.checked)
    {
        event.preventDefault(); // Empecher la soumission du formulaire
        alert("Veuiller remplir correctement tous les champs");
    }
});

