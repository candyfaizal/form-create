class Form
{
    constructor()
    {
        this.title = createElement("h1")
        this.input = createInput("")
        this.button = createButton("Play")
        this.greeting = createElement("h2")
    }
    
    display(){
        this.title.position(600,100)
        this.title.html("hi bro")
        this.button.position(600,290)
        this.input.position(550,320)
        this.greeting.position(650,320)
    
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            this.greeting.html("hi "+this.input.value())
        })
    }
}