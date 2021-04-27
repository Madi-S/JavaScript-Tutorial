class Component {
    constructor(selector) {
        // $ variables have DOM node
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector);
        this.$el.style.backgroundColor = options.color
        this.$el.style.width = this.$el.style.height = options.size + 'px'
    }
}

const box1 = new Box({
    selector: '#box1',
    color: 'blue',
    size: 100,
})
box1.hide()
box1.show()

const box2 = new Box({
    selector: '#box2',
    color: 'yellow',
    size: 300,
})
box2.hide()
box2.show()



class Circle extends Box {
    constructor(options){
        super(options)
        this.$el.style.borderRadius = options.borderRadius + '%'
    }
}

const c = new Circle({
    selector: '#circle',
    color: 'red',
    size: 200,
    borderRadius: 50
})