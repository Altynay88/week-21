document.addEventListener('DOMContentLoaded', () => {
document.getElementById('myForm')
.addEventListener('submit', handleForm);
 })

 function handleForm (e) {
    e.preventDefault();
 
    fetch("http://httpbin.org/post", {
            method: "POST",
            body: new FormData(myForm),
            headers: {
                'Content-Type': 'aplication/json;charset=utf-8'
            },
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => console.log(error));
}