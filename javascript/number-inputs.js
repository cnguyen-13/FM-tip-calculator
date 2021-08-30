function onClickNumberInput(e) {
	e.target.parentElement.classList.add("input__field--active")
}

function onUnfocusNumberInput(e) {
	e.target.parentElement.classList.remove("input__field--active")
}

for (const input of numberInputs) {
	input.addEventListener("click", onClickNumberInput)
	input.addEventListener("blur", onUnfocusNumberInput)
}
