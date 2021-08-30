const bill = document.querySelector("#bill")
const billNegativeError = document.querySelector("#error-negative-bill")

function addErrors(element) {
	billNegativeError.classList.add("input__error--active")
	element.parentElement.classList.add("input__field--error")
}

function removeErrors(element) {
	billNegativeError.classList.remove("input__error--active")
	element.parentElement.classList.remove("input__field--error")
}

function onChangeBillInput(e) {
	const element = e.target
	const value = parseFloat(element.value)
	const isNegative = value < 0
	element.value = value.toFixed(2)
	isNegative ? addErrors(element) : removeErrors(element)
}

bill.addEventListener("change", onChangeBillInput)
