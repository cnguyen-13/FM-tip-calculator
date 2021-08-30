function addErrors(e) {
	billNegativeError.classList.add("input__error--active")
	e.parentElement.classList.add("input__field--error")
}

function removeErrors(e) {
	billNegativeError.classList.remove("input__error--active")
	e.parentElement.classList.remove("input__field--error")
}

function onChangeBillInput(e) {
	const element = e.target
	const value = parseFloat(element.value)
	const isNegative = value < 0
	if (!Number.isNaN(value)) {
		element.value = value.toFixed(2)
	}
	isNegative ? addErrors(element) : removeErrors(element)

	resetButtonToggle()
}

bill.addEventListener("change", onChangeBillInput)
