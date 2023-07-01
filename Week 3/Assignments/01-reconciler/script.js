var existingChildren = [];

function createDomElements(data) {
  var parentElement = document.getElementById("mainArea");
  var newChildren = [];

  data.forEach(function(item) {
    var existingChild = existingChildren.find(function(child) {
      return child.dataset.id === String(item.id);
    });
    
    if (existingChild) {
      existingChild.children[0].innerHTML = item.title;
      existingChild.children[1].innerHTML = item.description;
      existingChildren = existingChildren.filter(function(child) {
        return child !== existingChild;
      });
    } else {
      var childElement = document.createElement("div");
      childElement.dataset.id = item.id;
      
      var grandChildElement1 = document.createElement("span");
      grandChildElement1.innerHTML = item.title;
      
      var grandChildElement2 = document.createElement("span");
      grandChildElement2.innerHTML = item.description;
      
      var grandChildElement3 = document.createElement("button");
      grandChildElement3.innerHTML = "Delete";
      grandChildElement3.setAttribute("onclick", "deleteTodo(" + item.id + ")");
      
      childElement.appendChild(grandChildElement1);
      childElement.appendChild(grandChildElement2);
      childElement.appendChild(grandChildElement3);
      newChildren.push(childElement);
    }
  });

  existingChildren.forEach(function(child) {
    parentElement.removeChild(child);
  });

  newChildren.forEach(function(child) {
    parentElement.appendChild(child);
    existingChildren.push(child);
  });
}

window.setInterval(() => {
  let todos = [];
  for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
    todos.push({
      title: "Go to gym",
      description: "Go to gym from 5",
      id: i + 1
    });
  }

  createDomElements(todos);
}, 1000);
