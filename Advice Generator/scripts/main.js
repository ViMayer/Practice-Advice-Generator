const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json()

  document.getElementById("title").innerHTML = `<h2>Advice #${data.slip.id}</h2>`
  document.getElementById("advice").innerHTML = `<p>"${data.slip.advice}"</p>`
}


const diceBtn = document.getElementById("btn-dice");
const title = document.getElementById("title");
const advice = document.getElementById("advice");

window.addEventListener("load", function(event) {
  fetchAdvice();
  setTimeout(() => {
    title.classList.remove("active")
    advice.classList.remove("active")
  }, 1000);
});



diceBtn.addEventListener("click", () => {
  if (title.classList.contains("active")){
    title.classList.remove("active")
  } else {
    title.classList.add("active");
    setTimeout(() => {
      title.classList.remove("active")
    }, 600);
  }
  if (advice.classList.contains("active")){
    advice.classList.remove("active")
  } else {
    advice.classList.add("active");
    setTimeout(() => {
      advice.classList.remove("active")
    }, 600);
  }
  
  
});


