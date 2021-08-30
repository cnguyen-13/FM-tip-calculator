const people = document.querySelector("#people")
const zeroError = document.querySelector("#error-zero")
const negativeError = document.querySelector("#error-negative")
const decimalError = document.querySelector("#error-decimal")
const peopleErrors = [zeroError, negativeError, decimalError]

function getErrors(value) {
	return {
		isZero: value === 0,
		isNegative: value < 0,
		isDecimal: !Number.isInteger(value) && !Number.isNaN(value),
		hasNoErrors: !this.isZero && !this.isNegative && !this.isDecimal,
	}
}

function resetErrorMessages() {
	for (const error of peopleErrors) {
		error.classList.remove("input__error--active")
	}
}

function onChangePeopleInput(e) {
	resetErrorMessages()
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
}

people.addEventListener("change", onChangePeopleInput)
