function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysOfDecember() {
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let ulDays = document.querySelector("#days")
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let dias = decemberDaysList[index];
    let dayLi = document.createElement("li");
    dayLi.innerText = dias;
    dayLi.className = "day"
    if (dias === 24 || dias === 31) {
      dayLi.className = "day holiday"
    } else if (dias === 4 || dias === 11 || dias === 18) {
      dayLi.className = "day friday"
    } else if (dias === 25) {
      dayLi.className = "day friday holiday"
    }
    ulDays.appendChild(dayLi)
  }
}

createDaysOfDecember();

function holidayButton(holidays) {
  let divButtonContainer = document.querySelector(".buttons-container");
  let holidayButton = document.createElement("button");
  holidayButton.id = "btn-holiday"
  holidayButton.innerText = holidays
  divButtonContainer.appendChild(holidayButton)
}

holidayButton("Feriados")

let botaoDosFeriados = document.querySelector("#btn-holiday")
botaoDosFeriados.addEventListener("click", function () {
  let feriados = document.querySelectorAll(".holiday")
  for (let dias of feriados) {
    dias.classList.toggle("coloreBranco")
  }
})

function createButtonFriday(string) {
  let divButtonContainer = document.querySelector(".buttons-container");
  let fridayButton = document.createElement("button");
  fridayButton.id = "btn-friday"
  fridayButton.innerText = string
  divButtonContainer.appendChild(fridayButton)
}

createButtonFriday("Sexta-feira");

function saveFridays() {
  const fridays = document.getElementsByClassName('friday');
  let arrayFridays = [];
  for (let i of fridays) {
    arrayFridays.push(i.innerHTML);
  }
  return arrayFridays;
}

const savedFridays = saveFridays();

let fridayButton = document.querySelector("#btn-friday")

fridayButton.addEventListener("click", function () {
  let sextas = document.querySelectorAll(".friday")
  for (let index2 = 0; index2 < sextas.length; index2 += 1) {
    if (sextas[index2].innerText !== "SEXTOU!!!") {
      sextas[index2].innerText = "SEXTOU!!!"
    } else {
      sextas[index2].innerText = savedFridays[index2]
    }
  }
})


let listaDosDiasTotais = document.querySelectorAll(".day")

for (let index of listaDosDiasTotais) {
index.addEventListener("mouseover", function (event) {
  event.target.classList.add("zoom")
})

index.addEventListener("mouseout", function (event) {
  event.target.classList.remove("zoom")
})
}

function addTasks(string) {
  let divPai = document.querySelector(".my-tasks")
  let span = document.createElement("span")
  span.innerText = string
  divPai.appendChild(span)
}

addTasks("ESTUDAR PROGRAMAÇÃO")

function addLegenda(string) {
  let divPai = document.querySelector(".my-tasks")
  let divFilho = document.createElement("div")
  divFilho.classList.add("task")
  divFilho.style.backgroundColor = string
  divPai.appendChild(divFilho)
}

addLegenda("green")

let divTasks = document.querySelectorAll(".task")


for (let index of divTasks) {
index.addEventListener("click", function (event) {
event.target.classList.toggle("selected")
})
}

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor; 
      event.target.style.color = color; 
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)';  
    }
  });
}

setDayColor();