
	var $display;

	$(document).ready(function() {
		$display = $(".display");

		$(".digit, .operator").on("click", onInput);
		$(".equals").on("click", onCalculate);
		$(".clear").on("click", onClear);
	});

	function onInput(e) {
		var $button = $(e.currentTarget),
			action = $button.data("action"),
			value = $display.val();

		if (value === "0") {
			value = action;
		} else {
			value += action;
		}

		updateDisplay(value);
	}

	function onCalculate(e) {
		var equation = $display.val(),
			value;

		try {
			value = eval(equation);
		} catch(e) {
			value = "error";
		}

		updateDisplay(value);
	}

	function onClear(e) {
		updateDisplay(0);
	}

	function updateDisplay(value) {
		$display.val(value);
	}