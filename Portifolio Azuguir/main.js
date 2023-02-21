const header = document.querySelector("header")
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};


//var

const fname = document.getElementById('fname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const text = document.getElementById('text');




// submit

const submit = document.getElementsByClassName('contact-form')[0];

submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Clicked");



    let ebody = `
    <b>Name: </b>${fname.value}
    <br>
    <b>Email: </b>${email.value}
    <br>
    <b>Phone: </b>${phone.value}
    <br>
    <b>Text: </b>${text.value}
    <br>
    
    `




    Email.send({
        SecureToken : "c07520bf-d53d-4e70-94cc-83123d27ff1c",
        To : 'lucasmacajacques@gmail.com',
        From : "lucasmacajacques@gmail.com",
        Subject : "Contact Email" + email.value,
        Body : ebody
    }).then(
      message => alert(message)
    );
})

