function resetNumberInput() {
	for (const input of numberInputs) {
		input.value = ""
	}
}

function resetTipOptions() {
	for (const option of tipOptions) {
		option.classList.remove("select__btn--active")
	}
}

function resetErrors() {
	for (const error of errors) {
		error.classList.remove("input__error--active")
	}
}

function resetPeopleErrors() {
	for (const error of peopleErrors) {
		error.classList.remove("input__error--active")
	}
}

function resetInputFieldErrors() {
	for (const input of inputFields) {
		input.classList.remove("input__field--error")
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

function resetButtonToggle() {
	let isResetable = false

	for (const option of tipOptions) {
		if (option.classList.contains("select__btn--active")) {
			isResetable = true
		}
	}

	for (const input of numberInputs) {
		if (input.value !== "") {
			isResetable = true
		}
	}

	if (isResetable) {
		resetButton.classList.add("results__reset-btn--activable")
	} else {
		resetButton.classList.remove("results__reset-btn--activable")
	}
}

const CLASSES = {}
