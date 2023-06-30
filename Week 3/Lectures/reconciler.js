function createTodoElements(todos) {
    let parentElement = document.getElementById("mainArea")
    parentElement.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        let childElement = document.createElement("div")
        let gradChildElement1 = document.createElement("span")
        gradChildElement1.innerHTML = data[i].title

        let gradChildElement2 = document.createElement("span")
        gradChildElement2.innerHTML = data[i].description

        let gradChildElement3 = document.createElement("button")
        gradChildElement3.innerHTML = "Delete"
        gradChildElement3.setAttribute("onclick", "deletetodo(" + data[i].id + ")")

        childElement.appendChild(gradChildElement1)
        childElement.appendChild(gradChildElement2)
        childElement.appendChild(gradChildElement3)
        parentElement.appendChild(childElement)
    }
}

window.setInterval(() => {
    let todos = []
    for (let i=0; i < Math.floor(Math.random() * 100);i++){
        todos.push({
            title: "Go to Gym",
            description: "Leg Day",
            id: i + 1
        })
    }
    createTodoElements(todos)
}, 5000)
