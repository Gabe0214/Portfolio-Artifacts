// nav component 

function navitems() {
    const nav = document.querySelector('.main-nav')
    const project = document.createElement('a');
    const about = document.createElement('a');
    const skills = document.createElement('a');

    // set attribute

    project.href = "#projects";
    about.href = "#about";
    skills.href = "#skills";

    // textContent 

    project.textContent = 'Project';
    about.textContent = 'About';
    skills.textContent = 'Skills';

  // append

  nav.appendChild(about);
  nav.appendChild(skills);
  nav.appendChild(project);
  
  return nav;

}


const header = document.getElementById('main-header');


header.appendChild(navitems());


// about 
