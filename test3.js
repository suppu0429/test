function active() {
window.location.href="about.html"
}

function valu(){
    let b = document.getElementById("pig").value;
    console.log(b)
    document.getElementById("se").innerHTML = b
}
let registrationForm={}
function handleChange(e){
//   console.log(e.target.value)
  registrationForm[e.target.name] = e.target.value
  console.log("registrationForm", registrationForm)
}

 let usersList = []
 function handleSubmit(e){
 usersList.push(registrationForm)
 registrationForm={}
 console.log("usersList", usersList)
 }
  

