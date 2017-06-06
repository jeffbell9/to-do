$(document).ready(function() {

	//show be awesome! item on startup

	$("#list").html("<tr><td><input type='checkbox' checked><label>be awesome!</label></td><td><button class='delete'>delete</button></td></tr>");

	var taskInput = $("#toDoItem");
	var list = $("#list");

	var createNewItem = function(item) {

		var listItem = document.createElement("tr");
		var tableDataItem = document.createElement("td");
		var tableDataButton = document.createElement("td");
  
		var checkbox = document.createElement("input"); //checkbox
		var label = document.createElement("label");
		var deleteButton = document.createElement("button");
  
  		checkbox.type = "checkbox";
  
  		deleteButton.innerText = "delete";
  		deleteButton.className = "delete";
  
  		label.innerText = item;

  		listItem.appendChild(tableDataItem);
		tableDataItem.appendChild(checkbox);
		tableDataItem.appendChild(label);
		listItem.appendChild(tableDataButton);
		tableDataButton.appendChild(deleteButton);

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
		var td = gottaGo.parentNode;
		var tr = td.parentNode;
		tr.removeChild(td);
	}

	$("#add").click(function() {
		addTask();
	});

	//cycle over any existing items and bind tasks

	$("tr").each(function() {
		bindTaskEvents(this);
	})

});