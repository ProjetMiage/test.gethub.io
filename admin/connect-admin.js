document.addEventListener('DOMContentLoaded',function(){
const a = document.getElementById('adminis')
a.addEventListener('click',function(){
    const code = prompt("Veuillez confirmer votre identité avec votre code d'Administrateur:");
    if(code === 'P31G3Miage'){
        window.location.href = "file:///C:/Users/Lenovo/Documents/website/Projet%20%C3%A0%20rendre/admin/admin.html";
    }else{
        alert("Connexion echoue!");
    }
});
});