const bill = document.querySelector("#bill")
const numberInputs = document.querySelectorAll(".input__number")
const tipOptions = document.querySelectorAll(".select__btn")
const people = document.querySelector("#people")
const errors = document.querySelectorAll(".input__error")
const zeroError = document.querySelector("#error-zero")
const negativeError = document.querySelector("#error-negative")
const decimalError = document.querySelector("#error-decimal")

//Number inputs focus and unfocus effects
function onClickNumberInput(e) {
	e.target.parentElement.classList.add("input__field--active")
}

function onUnfocusNumberInput(e) {
	e.target.parentElement.classList.remove("input__field--active")
}

function resetTipSelections() {
	for (const option of tipOptions) {
		option.classList.remove("select__btn--active")
	}
}

function onSelectTipOption(e) {
	resetTipSelections()

	const selectedOption = e.target
	selectedOption.classList.add("select__btn--active")
}

function resetErrorMessages() {
	for (const error of errors) {
		error.classList.remove("input__error--active")
	}
}

function getErrors(value) {
	return {
		isZero: value === 0,
		isNegative: value < 0,
		isDecimal: !Number.isInteger(value) && !Number.isNaN(value),
		hasNoErrors: !this.isZero && !this.isNegative && !this.isDecimal,
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

function onChangeBillInput(e) {}

//Number of people functionality
people.addEventListener("change", onChangePeopleInput)
bill.addEventListener("change", onChangeBillInput)

for (const input of numberInputs) {
	input.addEventListener("click", onClickNumberInput)
	input.addEventListener("blur", onUnfocusNumberInput)
}

for (const option of tipOptions) {
	option.addEventListener("click", onSelectTipOption)
}
