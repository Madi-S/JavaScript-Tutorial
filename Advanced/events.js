window.addEventListener('online', event => console.log('You are connected!'))

window.onoffline = event => console.log('The network connection has been lost.')

const input = document.querySelector('input')
input.addEventListener('focus', event => event.target.style.background = 'red')
input.addEventListener('blur', event => event.target.style.background = '')


document.querySelector('div').insertAdjacentHTML('afterbegin', `
<p>Resize the browser window to fire the <code>resize</code> event.</p>
<p>Window height: <span id="height"></span></p>
<p>Window width: <span id="width"></span></p>`)

const heightOutput = document.querySelector('#height')
const widthOutput = document.querySelector('#width')


function reportWindowSize() {
    heightOutput.textContent = window.innerHeight
    widthOutput.textContent = window.innerWidth
}

window.onresize = reportWindowSize;

window.addEventListener('resize', reportWindowSize)

input.addEventListener('copy', event => {
    const selection = document.getSelection()
    console.log(selection, selection.toString())
    event.clipboardData.setData('text/plain', 'Try again')
    event.preventDefault()
})

input.addEventListener('paste', event => {
    const paste = (event.clipboardData || window.clipboardData).getData('text')
    console.log('Pasted text:', paste)

    event.target.value = paste.repeat(5)
    event.preventDefault()
})

document.addEventListener('keydown', event => console.log('Key down:', event.code))
document.addEventListener('keyup', event => console.log('Key up:', event.code))

input.addEventListener('contextmenu', event => event.preventDefault())
input.addEventListener('dblclick', event => event.target.style.color = 'blue')
input.addEventListener('mouseenter', event => document.bgColor = 'yellow')
input.addEventListener('mouseleave', event => document.bgColor = '')
input.addEventListener('mousemove ', event => console.log('moved', event.offsetX, event.offsetY))

input.addEventListener('select', event => console.log(event.target.value.substring(event.target.selectionStart, event.target.selectionEnd)))

heading = document.querySelector('h1')
heading.style.fontSize = '40px'
heading.addEventListener('wheel', event => {
    event.preventDefault()
    console.log(event.deltaY, document.querySelector('h1').style.fontSize)
    // document.querySelector('h1').style.color = event.deltaY > 0 ? 'blue' : 'yellow'
    heading.style.fontSize = event.deltaY > 0 ? '30px' : '50px'
})