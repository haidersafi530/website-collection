let ajax = document.getElementById("ajax-form");
ajax.addEventListener('submit', function(e){
    e.preventDefault();

let formData = new FormData(this);

fetch('submit.php', {
    method : "POST",
    body : formData
})
.then(res => res.text())   // ye code php say arha hai ye fetch karna kay method hai oper deko
.then(data => {
    document.getElementById("response").innerHTML = data;
    this.reset();
})
.catch(error => {
    document.getElementById('response').innerHTML = "Error" + error;
});

});