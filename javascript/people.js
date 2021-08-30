function onChangePeopleInput(e) {
	resetPeopleErrors()
	const element = e.target
	const value = parseFloat(element.value)
	const { isZero, isNegative, isDecimal } = getErrors(value)

	if (isZero) {
		zeroError.classList.add("input__error--active")
	} else if (isNegative) {
		negativeError.classList.add("input__error--active")
	} else if (isDecimal) {
		decimalError.classList.add("input__error--active")
	}

	if (isZero || isNegative || isDecimal) {
		element.parentElement.classList.add("input__field--error")
	} else {
		element.parentElement.classList.remove("input__field--error")
	}

	resetButtonToggle()
}

people.addEventListener("change", onChangePeopleInput)
