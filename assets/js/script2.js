//El suffix identifies this as a DOM element.
//This is a naming convention that will help us keep track of which variables store DOM elements.
//找到想要被赋予功能的button，on a button click, create a task.
//因为这个button会增加功能／会变化，所以把它名为——var
var buttonEl = document.querySelector("#save-task");

//the ul list, the parent list/to do list panel of the lists
//find the list panel where you want your new task belongs to
//找到母panel
//因为这个母panel最后会增加新的task item／会变化，所以把它名为——var
var tasksToDoEl = document.querySelector("#tasks-to-do");

//add event listener to var-button element
//给button会增加功能 —— on click & callback函数
buttonEl.addEventListener("click", function () {
  //create each li to var-listItemEl
  //创建新的li
  //把要创建的第一个“li”变成一个var，方便后面对其增加变化，这会让所有“li”统一风格
  var listItemEl = document.createElement("li");
  //find the li style in css，apply this class to "li" & all future "li"
  listItemEl.className = "task-item";
  //give the new task a text content -- "This is a new task." -- this will show on the new task box
  listItemEl.textContent = "This is a new task.";
  //tells the list panel, this item is one of your child
  //把这新的“li”插入母版，告诉母版这新的“li”也是你的孩子，放在你的集合里
  tasksToDoEl.appendChild(listItemEl);
});
