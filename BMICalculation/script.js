let bmiForm = document.querySelector(".bmi-form")

bmiForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const form = e.target

    const name = form.querySelector("#name").value
    const height = form.querySelector("#height").value
    const weight = form.querySelector("#weight").value

    
})