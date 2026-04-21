function checkAnswers() {

    let score = 0;
    let results = "";

    // Q1
    let q1 = document.getElementById("q1").value.toLowerCase();
    if(q1.includes("hypertext markup language")) {
        score++;
        results += "Q1: Correct<br>";
    } else {
        results += "Q1: Incorrect (Answer: HyperText Markup Language)<br>";
    }

    // Q2
    let q2 = document.querySelector('input[name="q2"]:checked');
    if(q2 && q2.value === "b") {
        score++;
        results += "Q2: Correct<br>";
    } else {
        results += "Q2: Incorrect (Answer: Styling)<br>";
    }

    // Q3
    let q3 = document.querySelector('input[name="q3"]:checked');
    if(q3 && q3.value === "b") {
        score++;
        results += "Q3: Correct<br>";
    } else {
        results += "Q3: Incorrect (Answer: <p>)<br>";
    }

    // Q4
    let q4 = document.querySelector('input[name="q4"]:checked');
    if(q4 && q4.value === "a") {
        score++;
        results += "Q4: Correct<br>";
    } else {
        results += "Q4: Incorrect (Answer: HyperText Transfer Protocol)<br>";
    }

    // Q5 (multi-select)
    let q5 = document.querySelectorAll('input[name="q5"]:checked');
    let correctAnswers = ["html", "css"];
    let selected = [];

    q5.forEach(box => selected.push(box.value));

    if(selected.includes("html") && selected.includes("css") && selected.length === 2) {
        score++;
        results += "Q5: Correct<br>";
    } else {
        results += "Q5: Incorrect (Answer: HTML and CSS)<br>";
    }

    let final = "Score: " + score + "/5<br>";

    if(score >= 3) {
        final += "<span style='color:green;'>PASS</span><br>";
    } else {
        final += "<span style='color:red;'>FAIL</span><br>";
    }

    document.getElementById("results").innerHTML = final + results;
}