let gameSeq = [];
let userSeq = [];

let started = false
let level = 0

h2 = document.querySelector("h2")
let btns = ["yellow", "green", "red", "blue"]



document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started")
    started = true
  }

  levelUp()
})

function gameFlash(btn) {
  btn.classList.add("flash")
  setTimeout(function () {
    btn.classList.remove("flash")

  }, 150)

}


function userFlash(btn) {
  btn.classList.add("userflash")
  setTimeout(function () {
    btn.classList.remove("userflash")

  }, 150)

}

function levelUp() {
  userSeq = []
  level++
  h2.innerText = `Level ${level}`

  let randomIndex = Math.floor(Math.random() * 4)
  let randomColor = btns[randomIndex]
  let randomBtn = document.querySelector(`.${randomColor}`)
  // console.log(randomIndex)
  // console.log(randomColor)
  // console.log(randomBtn)
  gameSeq.push(randomColor)
  console.log(gameSeq)
  gameFlash(randomBtn)
}

function checkAns(idx) {


  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 800)
    }
  } else {
    h2.innerHTML = `GAME OVER! Your score was <b>${level}</br> <br> Press any key to start.`
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white"
    }, 1000)
    reset()
  }
}
function btnPress() {
  let btn = this
  userFlash(btn)

  userColor = btn.getAttribute("id")
  userSeq.push(userColor)

  checkAns(userSeq.length - 1)
}

let allbtns = document.querySelectorAll(".btn")
for (btn of allbtns) {
  btn.addEventListener("click", btnPress)
}

function reset() {
  started = false
  gameSeq = []
  userSeq = []
  level = 0

}