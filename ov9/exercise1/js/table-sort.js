var table = document.getElementById("the-table-body"),
	rows = Array.prototype.slice.call(table.children, 0),
	btn1 = document.getElementById("sort-button-1"),
	btn2 = document.getElementById("sort-button-2"),
	btn3 = document.getElementById("sort-button-3");

function sortByColNr(column){		
		rows.sort(function(o1,o2){
			val1 = o1.cells[column].innerHTML
			val2 = o2.cells[column].innerHTML
			return val1 == val2 ? 0 : (val1 < val2 ? -1 : 1);
		});
		for (var i = 0; i < rows.length; i++) {
			table.appendChild(rows[i]);
		};
}

window.addEventListener("load", function(event){
	btn1.addEventListener('click', function (e) {
		sortByColNr(0);		
	});
	btn2.addEventListener('click', function (e) {
		sortByColNr(1);
	});
	btn3.addEventListener('click', function (e) {
		sortByColNr(2);		
	});
});