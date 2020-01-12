const magbutton = document.getElementById('magbutton')

const sayHi = () => {
    let val = document.getElementById('input')
    console.log(val.value)
}

magbutton.onclick = sayHi
