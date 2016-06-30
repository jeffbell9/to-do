$(document).ready(function() {

	//show be awesome! item on startup

	$("#list").html("<li><input type='checkbox' checked><label>be awesome!</label><button class='delete'>delete</button></li>");

	var taskInput = $("#toDoItem");
	var list = $("#list");

	var createNewItem = function(item) {

		var listItem = document.createElement("li");
  
		var checkbox = document.createElement("input"); //checkbox
		var label = document.createElement("label");
		var deleteButton = document.createElement("button");
  
  		checkbox.type = "checkbox";
  
  		deleteButton.innerText = "delete";
  		deleteButton.className = "delete";
  
  		label.innerText = item;
  
		listItem.appendChild(checkbox);
		listItem.appendChild(label);
		listItem.appendChild(deleteButton);

		return listItem;

	}

	var bindTaskEvents = function(taskListItem) {

		var deleteButton = taskListItem.querySelector("button.delete");

		deleteButton.onclick = deleteTask;
	}

	var addTask = function() {

		if (taskInput.val() !== "") {
			var listItem = createNewItem(taskInput.val());
			list.append(listItem);
			bindTaskEvents(listItem);

			taskInput.val("");
			
		} else {
			alert("Please enter something to do");
		}
		
	}

	var deleteTask = function() {

		var gottaGo = this.parentNode;
		var ul = gottaGo.parentNode;
		ul.removeChild(gottaGo);
	}

	$("#add").click(function() {
		addTask();
	});

	//cycle over any existing items and bind tasks

	$("li").each(function() {
		bindTaskEvents(this);
	})

});