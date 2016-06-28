$(document).ready(function() {

	// populate list at startup

	var htmlList = "";

	if (JSON.parse(localStorage.getItem("list")) === null) {
		var loadList = ["<li><input type='checkbox' checked><label>be awesome!</label></li>",
					"<li><input type='checkbox'><label>__________</label><button class='delete'>delete</button></li>",
					"<li><input type='checkbox'><label>__________</label><button class='delete'>delete</button></li>",
					"<li><input type='checkbox'><label>__________</label><button class='delete'>delete</button></li>",
					"<li><input type='checkbox'><label>__________</label><button class='delete'>delete</button></li>",
					"<li><input type='checkbox'><label>__________</label><button class='delete'>delete</button></li>"
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
					var index = loadList.indexOf("<li><input type='checkbox'><label>__________</label></li>");
					loadList[index] = "<li><input type='checkbox'><label for='cb' class='underline'>" + item + "</label></li>";
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

		var loadList = ["<li><input type='checkbox' checked><label>be awesome!</label></li>",
			"<li><input type='checkbox'><label>__________</label><button class='delete'>delete</button></li>",
			"<li><input type='checkbox'><label>__________</label><button class='delete'>delete</button></li>",
			"<li><input type='checkbox'><label>__________</label><button class='delete'>delete</button></li>",
			"<li><input type='checkbox'><label>__________</label><button class='delete'>delete</button></li>",
			"<li><input type='checkbox'><label>__________</label><button class='delete'>delete</button></li>"
			];

		for (var item in loadList) {
			htmlList += loadList[item];
		}

		$("#list").html(htmlList);

		localStorage.setItem("list", JSON.stringify(loadList));

	});

});