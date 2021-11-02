// TODO: write your code here

let count1 = 1;
const pos1 = document.querySelectorAll("#player1-race td");

let count2 = 1;
const pos2 = document.querySelectorAll("#player2-race td");

const resetTable = () => {
  pos1[count1].classList.remove("active");
  pos2[count2].classList.remove("active");
  count1 = 1;
  count2 = 1;
  pos1[34].classList.add("finnish-line");
  pos2[34].classList.add("finnish-line");
  pos1[count1].classList.add("active");
  pos2[count2].classList.add("active");
};

const start = () => {
  document.getElementById("player1-win").innerHTML = "";
  document.getElementById("player2-win").innerHTML = "";
};

document.addEventListener("keyup", (e) => {
  if (count1 === 34) {
    const win = document.getElementById("player1-win");
    win.innerHTML = "Player 1 WINS!!";
    resetTable();
  } else if (e.key === "q") {
    start();
    pos1[count1].classList.remove("active");
    count1 += 1;
    pos1[count1].classList.add("active");
  }
});

document.addEventListener("keyup", (e) => {
  if (count2 === 34) {
    const win = document.getElementById("player2-win");
    win.innerHTML = "Player 2 WINS!!";
    resetTable();
  } else if (e.key === "p") {
    start();
    pos2[count2].classList.remove("active");
    count2 += 1;
    pos2[count2].classList.add("active");
  }
});


// romain.addEventListener("click", (event) => {
//   console.log(event);
//   console.log(event.currentTarget);
// });
