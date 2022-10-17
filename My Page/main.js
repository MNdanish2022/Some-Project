console.log('main.js');

// =========== Navbar Menu =============

let sidemenu = document.getElementById('sidemenu')
        let menuButton=document.getElementById('menu-button');
        // console.log(menuButton);


        function openmenu() {
       
            sidemenu.style.top = '56px';
            setTimeout(() => {
               
                menuButton.innerHTML=`<i class=" nav-btn fa-solid fa-xmark fa" onclick="closemenu()"></i> `                
            },200);

        }
        function closemenu() {
        
            sidemenu.style.top = '-60%';
            setTimeout(() => {
              
                menuButton.innerHTML=`<i class=" nav-btn fa-solid fa-bars fa" onclick="openmenu()"></i> `    
            },200);
        }
//============== Nav bar menu click link to hide==================

let navbar=document.querySelectorAll('.nav-link');
// let navBtn=document.querySelector('.nav-btn');
navbar.forEach((a)=>{
a.addEventListener('click',()=>{
    closemenu()
})
})

// ========= Navbar scrolling ============
let nav=document.querySelector(".navigation-wrap");
window.onscroll=function(){
if(document.documentElement.scrollTop > 20){
    nav.classList.add('scroll-on')
}
else{
    nav.classList.remove('scroll-on')

}
}

// ========== Contact Form live to google sheet===============

const scriptURL = 'https://script.google.com/macros/s/AKfycbx6vpJg93GftKspUUeghea9l7H-PazNHCxGMSM3KRy-Q4xn0G2mxLAIvU3UgmaNtYa4/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = 'Message Sent Successfully';

            setTimeout(() => {
                msg.innerHTML = '';
            }, 5000);
            form.reset();

        })
        .catch(error => msg.innerHTML = 'Error Server Not Respond')
})