function onClickReset(e) {
	const element = e.target

	if (element.classList.contains("results__reset-btn--activable")) {
		resetTipOptions()
		resetNumberInput()
		resetErrors()
		resetInputFieldErrors()
		resetButtonToggle()
	}
}

resetButton.addEventListener("click", onClickReset)
