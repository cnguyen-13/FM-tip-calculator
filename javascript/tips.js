const tipOptions = document.querySelectorAll(".select__btn")

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

for (const option of tipOptions) {
	option.addEventListener("click", onSelectTipOption)
}
