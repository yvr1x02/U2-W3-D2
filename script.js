console.log("ciaoo");

function saveName(event) {
  event.preventDefault();

  const name = document.getElementById("inputName").value;

  if (name) {
    localStorage.setItem("name", name);
    showSavedName();
    document.getElementById("inputName").value = " ";
  } else {
    alert("Inserisci un nome");
  }
}

function deleteName(event) {
  event.preventDefault();

  localStorage.removeItem("name");
  showSavedName();
  document.getElementById("inputName").value = " ";
}

function showSavedName() {
  const savedName = localStorage.getItem("name");
  if (savedName) {
    document.getElementById("savedName").textContent = "Nome Salvato: " + savedName;
  } else {
    document.getElementById("savedName").textContent = " ";
  }
}

let time = 0;

const timer = document.getElementById("timer");

function updateTimer() {
  time++;
  timer.textContent = time;
  sessionStorage.setItem("timer", time);
}

setInterval(updateTimer, 1000);

window.onload = function () {
  showSavedName();
  document.getElementById("saveBtn").addEventListener("click", saveName);
  document.getElementById("deleteBtn").addEventListener("click", deleteName);

  const timeFromStorage = sessionStorage.getItem("timer");
  if (timeFromStorage) {
    time = timeFromStorage;
  }
};
