$(document).ready(function() {

	// populate list at startup

	var htmlList = "";

	if (JSON.parse(localStorage.getItem("list")) === null) {
		var loadList = ["<input type='checkbox' id='cb' class='toDoItem' checked><label for='cb'>be awesome!</label><br>",
					"<input type='checkbox' id='cb' class='toDoItem'><label for='cb'>__________</label><br>",
					"<input type='checkbox' id='cb' class='toDoItem'><label for='cb'>__________</label><br>",
					"<input type='checkbox' id='cb' class='toDoItem'><label for='cb'>__________</label><br>",
					"<input type='checkbox' id='cb' class='toDoItem'><label for='cb'>__________</label><br>",
					"<input type='checkbox' id='cb' class='toDoItem'><label for='cb'>__________</label><br>"
					];
		localStorage.setItem("list", JSON.stringify(loadList));
	} else {
		loadList = JSON.parse(localStorage.getItem("list"));
	}
		

	for (var item in loadList) {
		htmlList += loadList[item];
	}

	$("#list").html(htmlList);

	// add item to list

	$("#add").click(function() {
		if ($("#toDoItem").val() !== "") {
			$("label").each(function() {
				var htmlList = "";
				var loadList = JSON.parse(localStorage.getItem("list"));
				var item = $("#toDoItem").val();

				$("#toDoItem").val("");
				
				if ($(this).text() !== '_______') {
					var index = loadList.indexOf("<input type='checkbox' id='cb' class='toDoItem'><label for='cb'>__________</label><br>");
					loadList[index] = "<input type='checkbox' id='cb' class='toDoItem'><label for='cb' class='underline'>" + item + "</label><br>";
					localStorage.setItem("list", JSON.stringify(loadList));

					for (var item in loadList) {
						htmlList += loadList[item];
					}

					$("#list").html(htmlList);

					return false;
				}
			});
		} else {
			alert("Please enter something to do");
		}
		
	});

	// remove items from list

	$("#remove").click(function() {
		var htmlList = "";
		var loadList = ["<input type='checkbox' id='cb' class='toDoItem' checked><label for='cb'>be awesome!</label><br>",
			"<input type='checkbox' id='cb' class='toDoItem'><label for='cb'>__________</label><br>",
			"<input type='checkbox' id='cb' class='toDoItem'><label for='cb'>__________</label><br>",
			"<input type='checkbox' id='cb' class='toDoItem'><label for='cb'>__________</label><br>",
			"<input type='checkbox' id='cb' class='toDoItem'><label for='cb'>__________</label><br>",
			"<input type='checkbox' id='cb' class='toDoItem'><label for='cb'>__________</label><br>"
			];

		for (var item in loadList) {
			htmlList += loadList[item];
		}

		$("#list").html(htmlList);

		localStorage.setItem("list", JSON.stringify(loadList));

	});

});