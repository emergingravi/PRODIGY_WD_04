var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

// sidemenu
var sidebar = document.getElementById("sidebar");

function openmenu(){
    sidebar.style.right = "0";
}
function closemenu(){
    sidebar.style.right = "-200px";
}

//for tranfering data to google-sheet

const scriptURL = 'https://script.google.com/macros/s/AKfycbwF3FYn-zRd5ouCWbcylFRnEt1TnUuweaIerX_IFXM6lwEHqNjAe5x3EqhSNm2XWc5dZQ/exec';
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML = "Message sent sucessfullly"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })

    .catch(error => console.error('Error!', error.message))
})