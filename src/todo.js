//cloned whenever we want to append a new item
var toDoItem = {
  // receives text and sets text as task's name
  setTaskName: function(text) {
    this.taskName = text;
  },
  // like create task (creates object, sets name, then passes it on)
  render: function() {
    var listItem = document.createElement('li');
    listItem.innerHTML = this.taskName;
    return listItem;
  }
};

// find diff lists and append to DOM
// gives item to toDoItem
var toDoApp = {
  getUnfinished: function(){
    return document.getElementById('unfinished');
  },
  createTask: function(text) {
    //clones to do item when passed in
  var task = Object.create(toDoItem);
  // calling set task name method
  task.setTaskName(text);
  this.appendTask(task);
  },
  appendTask: function(task) {
  this.getUnfinished().appendChild(task.render());
  }
};



window.onload = function(){

  var button = document.getElementById('add-item');
  button.onclick = function () {
  var input = document.getElementById('new-task-field').value;
  toDoApp.createTask(input);
  };

};




if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  };
}
