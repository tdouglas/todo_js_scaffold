

function ToDoApp(unfinishedItems, finishedItems) {
  this.unfinishedItems = unfinishedItems;
  this.finishedItems = finishedItems;
}

function ToDoItem(name, description) {
  this.name = name;
  this.description = description;
}

if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  };
}
