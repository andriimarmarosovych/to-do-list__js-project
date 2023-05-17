const listIds = ["test 1", "test 2", "test 3"]

document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.querySelector("#list-container")
    listIds.forEach(list => {
        const newList = document.createElement('div')
        newList.classList.add("list")
        newList.innerHTML = list
        listContainer.appendChild(newList)
    })
})

function addList() {

    const listNamer = document.createElement('div')

    document.querySelector("#add-list").classList.add('clicked')
    console.log('lol')
}

document.querySelector("#add-list").addEventListener("click", addList)