var saluto = 'Hello world!';
var valore = 0;


var tagSaluto = document.getElementById('tagsaluto');
tagSaluto.innerText = saluto;

function aumenta() {
    valore++;
    var tagvalore = document.getElementById('tagvalore');
    tagvalore.innerText = valore;
    console.log(valore);
}