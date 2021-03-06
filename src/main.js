let addToDoButton = document.getElementById('addToDo')
let toDoContainer = document.getElementById('toDoContainer')
let inputField = document.getElementById('inputField')

addToDoButton.addEventListener('click', () =>{
  var paragraph = document.createElement('p')
  paragraph.classList.add('paragraph-styling')
  paragraph.innerText = inputField.value
  toDoContainer.appendChild(paragraph)
  inputField.value = ''

  paragraph.addEventListener('click', () =>{
    if(paragraph.style.textDecoration === 'line-through'){
      paragraph.style.textDecoration = 'none'
    }
    else{
      paragraph.style.textDecoration = 'line-through'
    }
  })

  paragraph.addEventListener('dblclick', () =>{
    toDoContainer.removeChild(paragraph)
  })

  paragraph.addEventListener('click', () =>{
    paragraph.style.remo = 'line-through'
  })
})

document.addEventListener("keydown", ({key}) => {
  if (key === "Enter"){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value
    toDoContainer.appendChild(paragraph)
    inputField.value = ''

    paragraph.addEventListener('click', () =>{
      if(paragraph.style.textDecoration === 'line-through'){
        paragraph.style.textDecoration = 'none'
      }
      else{
        paragraph.style.textDecoration = 'line-through'
      }
    })

    paragraph.addEventListener('dblclick', () =>{
      toDoContainer.removeChild(paragraph)
    })

    paragraph.addEventListener('click', () =>{
      paragraph.style.remo = 'line-through'
    })
  }
})
