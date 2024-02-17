function openQuestionPage() {
    document.getElementById("questionPage").style.display = "block";
}

function checkAnswer1() {
    var answer = document.getElementById("answer1").value.toLowerCase();
    if (answer === "html") {
        window.location.href = "question2.html";
    } else {
        alert("Incorrect answer. Try again!");
    }
}

function checkAnswer2() {
    var answer = document.getElementById("answer2").value.toLowerCase();
    if (answer.includes("merge sort")) {
        alert("Congratulations! You've completed the challenge.");
    } else {
        alert("Incorrect answer. Try again!");
    }
}
(function(){function n(){document.getElementById("questionPage").style.display="block"}function t(){var n=document.getElementById("answer1").value.toLowerCase();"html"===n?window.location.href="question2.html":alert("Incorrect answer. Try again!")}function o(){var n=document.getElementById("answer2").value.toLowerCase();n.includes("merge sort")?alert("Congratulations! You've completed the challenge."):alert("Incorrect answer. Try again!")}document.getElementById("readyButton").addEventListener("click",n),document.getElementById("submit1").addEventListener("click",t),document.getElementById("submit2").addEventListener("click",o)})();


