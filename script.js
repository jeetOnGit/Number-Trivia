let btn = document.getElementById("btn")
let randomBtn = document.getElementById("randomBtn")
let num =  document.getElementById("num")
let desc =  document.getElementById("desc")
let url = `http://numbersapi.com/`


let getNumber = () =>{
   let UserInp = document.getElementById("inp").value;
  let finalUrl = url + UserInp;
  fetch(finalUrl)
  .then(data => data.text()).then(item => { 
   // console.log("bssb");
      num.innerText = UserInp ;
      desc.innerText = item;
   })
}
btn.addEventListener('click', getNumber)



