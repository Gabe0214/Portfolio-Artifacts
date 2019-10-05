// nav component 

function navitems() {
    const nav = document.querySelector('.main-nav')
    //const home = document.createElement('a');
    const about = document.createElement('a');
    const skills = document.createElement('a');

    // set attribute

    //home.href = "#home";
    about.href = "#about";
    skills.href = "#skills";

    // textContent 

    ////home.textContent = 'Home';
    about.textContent = 'About';
    skills.textContent = 'Skills';

  // append

  //nav.appendChild(home);
  nav.appendChild(about);
  nav.appendChild(skills);
  
  return nav;

}


const header = document.getElementById('main-header');


header.appendChild(navitems());


// about 
