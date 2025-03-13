let bmiForm = document.querySelector(".bmi-form")
let resetBtn = document.querySelector("#reset")

bmiForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const form = e.target

    const name = form.querySelector("#name").value
    const weight = +form.querySelector("#weight").value
    const height = +form.querySelector("#height").value

    const result = form.querySelector("#result")
    console.log(result)

    console.log(height)
    console.log((height/100)**2)
    console.log(weight)

    const heightToWeightToRatio = (weight / ((height/100) ** 2))

    if (heightToWeightToRatio <= 18){
        result.textContent = `${name.toUpperCase()}, your BMI is ${heightToWeightToRatio.toFixed()} and you are Thin`
    }else if (heightToWeightToRatio > 18 && heightToWeightToRatio <= 25){
        result.textContent = `${name.toUpperCase()}, your BMI is ${heightToWeightToRatio.toFixed()} and you are Healthy`

    }else{
        result.textContent = `${name.toUpperCase()}, your BMI is ${heightToWeightToRatio.toFixed()} and you are Fat`
    }
})

resetBtn.addEventListener("click", function (e) {
    document.querySelector("#name").value = ""
    document.querySelector("#result").textContent = ''
    document.querySelector("#weight").value = ''
    document.querySelector("#height").value = ''
})