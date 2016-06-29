$(document).ready(function() {

	// populate list at startup

	var htmlList = "";
	var loadList;

	if (JSON.parse(localStorage.getItem("list")) === null) {
		loadList = ["<li><input type='checkbox' checked><label>be awesome!</label></li>"];
		localStorage.setItem("list", JSON.stringify(loadList));
	} else {
		loadList = JSON.parse(localStorage.getItem("list"));
	}
		

	for (var item in loadList) {
		htmlList += loadList[item];
	}

	$("#list").html(htmlList);



	var taskInput = $("#toDoItem");
	var addButton = $("#add");
	var list = $("#list");

	var createNewItem = function(item) {
		
		var listItem = "<li><input type='checkbox'><label class='underline'>" + item + "</label><button class='delete'>delete</button></li>";
			
		loadList.push("<li><input type='checkbox'><label class='underline'>" + item + "</label><button class='delete'>delete</button></li>");
				
		localStorage.setItem("list", JSON.stringify(loadList));

		return listItem;

	}

	var bindTaskEvents = function(taskListItem) {

			$(".delete").click(function() {
				console.log("delete me");

				var item = $(this).prev().html();
				
				var listItem = "<li><input type='checkbox'><label class='underline'>" + item + "</label><button class='delete'>delete</button></li>";
				var index = loadList.indexOf(listItem);

				
				var gottaGo = this.parentNode;
				var ul = gottaGo.parentNode
				ul.removeChild(gottaGo);

				loadList.splice(index,1);
				localStorage.setItem("list", JSON.stringify(loadList));
				
			});
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

	addButton.click(function() {
		addTask();
	});


	for(var i = 0; i < list.length; i++) {
  		bindTaskEvents(list.children[i]); 
	}

});