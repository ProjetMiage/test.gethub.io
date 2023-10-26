document.addEventListener('DOMContentLoaded',function(){
    const manageAdminBtn =document.getElementById('manageAdminBtn');
    const manageContentBtn = document.getElementById('manageContentBtn');
    const manageUsersBtn = document.getElementById('manageUsersBtn');
    const manageCommentsBtn = document.getElementById('manageCommentsBtn');
    const adminContent = document.getElementById('adminContent');
    
    function showAdminManagement() {
       //tableau de bord
       adminContent.style.display = "block";
       const board = [
          { name:'utilisateurs 1  ', eamail: 'utilisateur1@exemple.com  ',reservation:'19/03/2023-08h30min ',medecin:'Kilore Moussa'},
          { name:'utilisateurs 2  ', eamail: 'utilisateur2@exemple.com  ',reservation:'18/03/2023-15h00min ',medecin:'Samane Gueye'},
          { name:'utilisateurs 3  ', eamail: 'utilisateur3@exemple.com  ',reservation:'13/02/2023-10h00min ',medecin:'Youssouph Faty'},
          { name:'utilisateurs 4  ', eamail: 'utilisateur4@exemple.com  ',reservation:'19/04/2023-08h00min ',medecin:'Amadou Mbaye'},
          { name:'utilisateurs 5  ', eamail: 'utilisateur5@exemple.com  ',reservation:'03/04/2023-07h00min ',medecin:'khadija Wade'},
          { name:'utilisateurs 6  ', eamail: 'utilisateur6@exemple.com  ',reservation:'10/03/2023-18h00min ',medecin:'Marieme Diouf'},
          { name:'utilisateurs 7  ', eamail: 'utilisateur7@exemple.com  ',reservation:'24/03/2023-11h20min ',medecin:'Awa Diattara'},
          { name:'utilisateurs 8  ', eamail: 'utilisateur8@exemple.com  ',reservation:'16/05/2023-17h30min ',medecin:'Amadou Mbaye'},
          { name:'utilisateurs 9  ', eamail: 'utilisateur9@exemple.com  ',reservation:'19/07/2023-16h00min ',medecin:'Momar Cisse'},
          { name:'utilisateurs 10 ', eamail: 'utilisateur10@exemple.com ',reservation:'30/03/2023-11h00min ',medecin:'Maty Seck'},
       ];
       let rendezVous = '<h2> Les rendez-vous</h2><table>';
       board.forEach(user =>{
          rendezVous += `<tr>
                            <td colspan="2">${user.name}</td>
                            <td colspan="2">${user.eamail}</td>
                            <td colspan="2">${user.reservation}</td>
                            <td colspan="2">${user.medecin}</td>
                            <td colspan="2"><button onclick>Gerer</button></td>
                            </tr>`;
       });rendezVous += '</table>';
      adminContent.innerHTML = rendezVous;
    }
    function showUsersManagement() {
        // Donnees statiques des utilisateurs
        adminContent.style.display = "block";
         const users = [
            { name:'utilisateurs 1 :', eamail: 'utilisateur1@exemple.com'},
            { name:'utilisateurs 2 :', eamail: 'utilisateur2@exemple.com'},
            { name:'utilisateurs 3 :', eamail: 'utilisateur3@exemple.com'},
            { name:'utilisateurs 4 :', eamail: 'utilisateur4@exemple.com'},
            { name:'utilisateurs 5 :', eamail: 'utilisateur5@exemple.com'},
            { name:'utilisateurs 6 :', eamail: 'utilisateur6@exemple.com'},
            { name:'utilisateurs 7 :', eamail: 'utilisateur7@exemple.com'},
            { name:'utilisateurs 8 :', eamail: 'utilisateur8@exemple.com'},
         ];
         let usersList = '<h2>Liste des Utilisateurs</h2><table>';
         users.forEach(user =>{
            usersList += `<tr>
                              <td>${user.name}</td>
                              <td>${user.eamail}</td>
                          </tr>`;
         });usersList += '</table>';
        adminContent.innerHTML = usersList;
    }
    function showContentManagement() {
        // Donnees statiques des contenus
        adminContent.style.display = "block";
        const content = [
                { title:'contenu 1 :', description:'description du contenu 1'},
                { title:'contenu 2 :', description:'description du contenu 2'},
                { title:'contenu 3 :', description:'description du contenu 3'},
                { title:'contenu 4 :', description:'description du contenu 4'},
                { title:'contenu 5 :', description:'description du contenu 5'},
                { title:'contenu 6 :', description:'description du contenu 6'},
                { title:'contenu 7 :', description:'description du contenu 7'},
             ];
         let contentList = '<h2>Liste des contenus</h2><table>';
         content.forEach(item =>{
            contentList += `<tr>
                              <td>${item.title}</td> 
                              <td>${item.description}</td>
                            </tr>`;
         });contentList += '</table>';
        adminContent.innerHTML = contentList;
    }
    function showCommentsManagement() {
        // Donnees statique des commentaires
        adminContent.style.display = "block";
        const comments = [
           { author: 'Auteur 1 :', text: 'commentaire 1'},
           { author: 'Auteur 2 :', text: 'commentaire 2'},
           { author: 'Auteur 3 :', text: 'commentaire 3'},
           { author: 'Auteur 4 :', text: 'commentaire 4'},
           { author: 'Auteur 5 :', text: 'commentaire 5'},
           { author: 'Auteur 6 :', text: 'commentaire 6'},
           { author: 'Auteur 7 :', text: 'commentaire 7'},
         ];
         let commentsList = '<h2>Liste des commentaires</h2><table>';
         comments.forEach(comment =>{
            commentsList += `<tr>
                               <td>${comment.author}</td>
                               <td>${comment.text}</td>
                             </tr>`;
         });commentsList += '</table>';
        adminContent.innerHTML = commentsList;
    }
    const body = document.querySelector('img');
    body.addEventListener('click',function(){ adminContent.style.display = "none"});
    manageAdminBtn.addEventListener('click',showAdminManagement);
    manageUsersBtn.addEventListener('click',showUsersManagement);
    manageContentBtn.addEventListener('click',showContentManagement);
    manageCommentsBtn.addEventListener('click',showCommentsManagement);
    });