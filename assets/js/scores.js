let score = JSON.parse(localStorage.getItem("score"));
let initials = JSON.parse(localStorage.getItem("initials"));

if(localStorage.getItem("scores") === null) {
    localStorage.setItem("scores", JSON.stringify([]));
}
let scores = JSON.parse(localStorage.getItem("scores"));

scores.push({
    initials: initials,
    score: score
});

scores.sort((a,b) => b.score - a.score);
localStorage.setItem("scores", JSON.stringify(scores));

var olEl = document.querySelector("#highscores");

for (let i=0;i<scores.length;i++) {
    var liEl = document.createElement("li");
    liEl.textContent = String(scores[i].initials) + ": " + scores[i].score;
    olEl.appendChild(liEl);
}

var buttonClear = document.querySelector("#clear");

buttonClear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})
