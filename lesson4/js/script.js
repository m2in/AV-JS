// используем стандартные функции для сбора информации из id, class, тэгов и т.п.

let name = document.getElementById("name"),
surname = document.getElementById('surname'),
age = document.getElementById('age'),
nameInput = document.getElementsByTagName("input")[0],
surnameInput = document.getElementsByTagName("input")[1],
ageInput = document.getElementsByTagName("input")[2];
//  воспользуемся встроенными обработчиками событий 
// ---------------------------------------------------------------
nameInput.addEventListener('input', function(){
  name.innerHTML = nameInput.value;
});
// ---------------------------------------------------------------
surnameInput.addEventListener('input', function(){
  surname.innerHTML = surnameInput.value;
});

// ---------------------------------------------------------------
ageInput.addEventListener('input', function(){
  age.innerHTML = ageInput.value;
});

// ---------------------------------------------------------------

