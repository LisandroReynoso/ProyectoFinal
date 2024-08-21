
console.log('hola mundo')

const boton = document.createElement('button')

boton.textContent = 'mi boton'

document.body.append(boton)

boton.addEventListener('click', ()=> {
    fetch('/api/users')
        .then(response => response.json())
        .then(data => console.log(data))
})

