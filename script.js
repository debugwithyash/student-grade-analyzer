const form = document.getElementById("student-form");

const nameInput = document.getElementById("name");
const rollInput = document.getElementById("roll-number");

const htmlInput = document.getElementById("html");
const cssInput = document.getElementById("css");
const jsInput = document.getElementById("javascript");
const dbmsInput = document.getElementById("dbms");
const pythonInput = document.getElementById("python");

const totalInput = document.getElementById("total");
const percentageInput = document.getElementById("percentage");
const gradeInput = document.getElementById("grade");
const resultInput = document.getElementById("result");
const performanceInput = document.getElementById("performance");
const scholarshipInput = document.getElementById("scholarship");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = nameInput.value.trim();
    const roll = rollInput.value.trim();

    const html = Number(htmlInput.value);
    const css = Number(cssInput.value);
    const javascript = Number(jsInput.value);
    const dbms = Number(dbmsInput.value);
    const python = Number(pythonInput.value);

    if (
        name === "" ||
        roll === "" ||
        htmlInput.value === "" ||
        cssInput.value === "" ||
        jsInput.value === "" ||
        dbmsInput.value === "" ||
        pythonInput.value === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    const marks = [html, css, javascript, dbms, python];

    for (let mark of marks) {
        if (mark < 0 || mark > 100) {
            alert("Marks must be between 0 and 100.");
            return;
        }
    }

    const total = html + css + javascript + dbms + python;
    const percentage = (total / 500) * 100;

    let grade = "";
    let result = "";
    let performance = "";
    let scholarship = "";

    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else if (percentage >= 40) grade = "D";
    else grade = "F";

    if (marks.every(mark => mark >= 33)) {
        result = "PASS";
    } else {
        result = "FAIL";
    }

    if (percentage >= 90) performance = "Excellent";
    else if (percentage >= 75) performance = "Very Good";
    else if (percentage >= 60) performance = "Good";
    else if (percentage >= 40) performance = "Average";
    else performance = "Poor";

    if (percentage >= 85) {
        scholarship = "Eligible";
    } else {
        scholarship = "Not Eligible";
    }

    totalInput.value = total;
    percentageInput.value = percentage.toFixed(2) + "%";
    gradeInput.value = grade;
    resultInput.value = result;
    performanceInput.value = performance;
    scholarshipInput.value = scholarship;
});