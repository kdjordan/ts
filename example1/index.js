"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
console.log('go');
axios_1.default.get(url).then(function (res) {
    var todo = res.data;
    var id = todo.id, title = todo.title, completed = todo.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("\n    Todo with ".concat(id, "\n    Has a title of ").concat(title, "\n    And is ").concat(completed, "\n    "));
};
