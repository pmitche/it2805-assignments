var newtaskBtn = document.getElementById("new-task-btn"),
	cleartasksBtn = document.getElementById("clear-tasks-btn"),
	newTask = document.getElementById("new-task"),
	taskList = document.getElementById("list-of-tasks");

function addTask(){
	if (newTask.value == ""){
		alert("You must enter a proper task");
	}else{
		var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
		var	li = document.createElement("li");
			li.appendChild(checkbox);
			li.appendChild(document.createTextNode(" " + newTask.value));
		taskList.appendChild(li)
		newTask.value = "";
	}
}

function clearTasks(){
	var taskListElements = document.querySelectorAll("#list-of-tasks li");
	for (var i = 0; i < taskListElements.length; i++){
		var li = taskListElements[i];
		var checkbox = li.getElementsByTagName("input")[0];
		if(checkbox.checked){
			li.parentNode.removeChild(li);
		}
	}
}

window.addEventListener("load", function(event){
	newtaskBtn.addEventListener('click', function (e) {
		addTask()	
	});
	cleartasksBtn.addEventListener('click', function (e) {
		clearTasks()
	});
});