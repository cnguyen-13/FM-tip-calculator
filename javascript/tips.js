function onSelectTipOption(e) {
	resetTipOptions()

	const selectedOption = e.target
	selectedOption.classList.add("select__btn--active")

	resetButtonToggle()
}

for (const option of tipOptions) {
	option.addEventListener("click", onSelectTipOption)
}
