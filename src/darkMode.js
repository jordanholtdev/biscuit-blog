const slider = document.getElementById('darkModeSlider');

//dom ui elements
const body = document.querySelector('body');
const navHeader = document.getElementById('navHeader');
const article = document.querySelectorAll('article');
const articleHeader = document.querySelectorAll('.card-header');
const sideBar = document.querySelectorAll('div.card.mb-4');
const links = document.querySelectorAll('a');
const dropdown = document.querySelector('div.dropdown-menu');

//contact page
const contact = document.getElementById('contactInfo');

//about page
const main = document.getElementById('main');
const team = document.querySelectorAll('div.d-flex')
const aboutTeam = document.getElementById('aboutContainer');
const h1 = document.querySelector('h1');
const lead = document.querySelector('p.lead');

//post page
const table = document.querySelector('table');

slider.addEventListener('click', e => {
   
   activateDarkUI();
   if(localStorage.getItem('darkMode') !== 'On'){
      localStorage.setItem('darkMode', 'On')
   } else {
      localStorage.setItem('darkMode', 'Off')
   }

});

const activateDarkUI = () => {


      //home page element
      body.classList.toggle('darkModeBody');
      navHeader.classList.toggle('darkModeHeader');
      article.forEach(body => {
         body.classList.toggle('darkModeCardBody')
      });
      articleHeader.forEach(header => {
         header.classList.toggle('darkModeCardBody');
      });
      sideBar.forEach(card => {
         card.classList.toggle('darkModeCardBody');
      });
   
      links.forEach(link => {
         link.classList.toggle('text-light')
      });
      dropdown.classList.toggle('bg-dark');


      //contact page element
      if(contact){
      contact.classList.toggle('text-light');
      };
   
      //about page specific elements
      if(main){
         main.classList.toggle('text-light');
         h1.classList.toggle('text-dark');
         lead.classList.toggle('text-dark');
         team.forEach(card => {
            if(card.classList.contains('col')){
               card.firstElementChild.classList.toggle('darkModeCardBody');
            }
         })
      };

      //Post page 
      if(table){
         table.classList.toggle('table-dark')
      }
};

// check local storage 

if(localStorage.getItem('darkMode') === 'On'){
   activateDarkUI();
};