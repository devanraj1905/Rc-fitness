let active = document.querySelectorAll(".txt")
active.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active")
    }
    
})
// bmi
function calculateBMI() {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    height = height / 100;

    let bmi = weight / (height * height);

    let result = document.getElementById("result");
if (!height || !weight) {
    result.innerText = "Please enter height and weight";
    return;
}

    if (bmi < 18.5) {
        result.innerText = "BMI: " + bmi.toFixed(2) + " (Underweight)";
    }
    else if (bmi < 24.9) {
        result.innerText = "BMI: " + bmi.toFixed(2) + " (Normal)";
    }
    else if (bmi < 29.9) {
        result.innerText = "BMI: " + bmi.toFixed(2) + " (Overweight)";
    }
    else {
        result.innerText = "BMI: " + bmi.toFixed(2) + " (Obese)";
    }
}
