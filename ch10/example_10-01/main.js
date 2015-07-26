var size = window.getComputedStyle(document.body,':after').getPropertyValue('content');

;(function alertSize() {
	if (size.indexOf("Splus") !=-1) {
		alert('I will run functions for small screens');
	}
	if (size.indexOf("Mplus") !=-1) {
		alert('At medium sizes, a different function could run');
	}
	if (size.indexOf("Lplus") !=-1) {
		alert('Large screen here, different functions if needed');
	}
})();