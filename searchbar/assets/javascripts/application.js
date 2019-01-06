/*version avec bouton 'rechercher'
$(document).ready(function (){
    $('#submit-button').click(function (){

    //supprimer texte quand on clique à nouveau sur rechercher
    alert($('#search-bar').val()); //valeur de la searchbar
    let search = $('#search-bar').val(); 
    console.log(search);//verif
    $('#search-bar').val(search); //déclarer que la valeur de searchbar est égale a la variable search
    //search = search.replace(search, ''); //remplacer la valeur de la search barre par un contenu vide

    //surligner result de recherche
    let matchWord = new RegExp(search, 'g'); //g est présent pour séléctionner toutes les valeurs que l'on tape dans la search barre sur la page
    let newHtml = $('#content p').html().replace(matchWord, '<span class="yellow">' + search + '</span>'); //remplacer la valeur html par l'expression régulière

    $('#content p').html(newHtml); //redéfinir le nouveau html 
  });
});*/
$(document).ready(function (){
  let baseContent = $('#content p').html();

    $('#search-bar').keyup(function (){
      $('#content p').html(baseContent);//réinitialiser le content de base de la search barre à chaque clic sinon la fonction va prendre en compte le contenu avec le span content

      let valueSearch = $('#search-bar').val();
      let regxp = new RegExp(valueSearch, 'g');
      let searchContent = `<span class="yellow">${valueSearch}</span>`;
      let newContent = $('#content p').html().replace(regxp, searchContent);
      $('#content p').html(newContent);

    })
})