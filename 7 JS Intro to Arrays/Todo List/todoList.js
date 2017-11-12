var todos = [];

var input = prompt("What would you like to do?");

while (input !== "quit") {
	//handle input
	if(input === "list") {
		listTodos()
	} else if (input === "new") {
		addTodo()
	} else if (input === "delete") {
		deleteTodo()
	}
	//ask again for new input
	input = prompt("What would you like to do?");
}
console.log("You have quit the app!");

function listTodos() {
	console.log("**********");
	//foreach can take two arguements first is the item second is the index
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	})
	console.log("**********");
}

function addTodo() {
	//ask for new todo
	var newTodo = prompt("Enter new todo");
	//add to todos array
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo() {
	//ask for index of todo for deletion
	var index = prompt("Enter index of TODO to delete");
	//delete todo
	todos.splice(index, 1);
	console.log("Deleted TODO");
}