import { generateHtml, projectHtml } from "./HtmlGen.js";



document.querySelector('#mobile-nav').addEventListener('click', () => {
  const menuBar = document.querySelector('#mobile-nav-link');
  menuBar.classList.toggle('nav-flex');
});

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
      const menuBar = document.querySelector('#mobile-nav-link');
      menuBar.classList.remove('nav-flex'); // Ensure the menu closes
  });
});


var i = 0;
var txt = " S Nitheesh"; 
var speed = 200; 

function typeWriter() {
  if (i < txt.length) {
    document.querySelector("#typing-name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Start the typing effect
typeWriter();

const Languages1 = [{
  title:"C LANGUAGE",
  level:"Intermediate",
},{
  title:"C++",
  level:"Intermediate"
},{
  title:"Java",
  level:"Intermediate"
}];

const Languages2 = [{
  title:"Python",
  level:"Intermediate",
},];

const Languages3 = [{
  title:"HTML",
  level:"Intermediate",
},{
  title:"CSS",
  level:"Intermediate"
},{
  title:"JAVASCRIPT",
  level:"Intermediate"
}];
const Languages4 = [{
  title:"TAILWIND CSS",
  level:"Intermediate",
},{
  title:"REACT",
  level:"BASIC"
},
];



document.querySelector('#Experience-container-1').innerHTML = generateHtml(Languages1);
document.querySelector('#Experience-container-2').innerHTML = generateHtml(Languages2);

document.querySelector('#Experience-container-3').innerHTML = generateHtml(Languages3);
document.querySelector('#Experience-container-4').innerHTML = generateHtml(Languages4);

const projects = [
  {
    image:'/images/ecom.png',
    number:'Project One',
    liveDemoLink:'https://hydro-stores.vercel.app/',
    githubLink:'https://github.com/Nitheesh029/Ecommerce-site/tree/main',
  },
  {
    image:"/images/weather.png",
    number:'Project Two',
    liveDemoLink:"https://weather-app-n-kappa.vercel.app/",
    githubLink:"https://github.com/Nitheesh029/Weather-App/tree/main"
  },
  {
    image:"/images/Todo.png",
    number:'Project Three',
    liveDemoLink:"https://to-do-list-app-one-pi.vercel.app/",
    githubLink:"https://github.com/Nitheesh029/To-Do-list/tree/main"
  },
  {
    image:"/images/Todo.png",
    number:'Project Three',
    liveDemoLink:"https://to-do-list-app-one-pi.vercel.app/",
    githubLink:"https://github.com/Nitheesh029/To-Do-list/tree/main"
  }
];

document.querySelector('#projects-container').innerHTML= projectHtml(projects);


