let nameSurname = "Mehtap UĞUR";
let age = 23;

let linkedin = document.querySelector('#linkedinUrl');
linkedin.setAttribute("href", "https://www.linkedin.com/in/mehtapugur/");
let github = document.querySelector('#githubUrl');
github.setAttribute("href", "https://github.com/mehtapugur");

const nameAgeButtonDOM = document.querySelector('#nameAgeButton');
nameAgeButtonDOM.addEventListener('click', getNameAge);

function getNameAge(event){
  event.preventDefault();
  const NAME_SURNAME = document.querySelector('#nameSurname');
  NAME_SURNAME.innerHTML = nameSurname;
  const AGE = document.querySelector('#age');
  AGE.innerHTML = age;
  nameAgeButtonDOM.style.display = "none";
}
