class Form {
  constructor() {
    this.input = createInput("").attribute("placeHolder","enter your name")
    this.playButton = createButton("PLAY")
    this.titleImg = createImg("./assets/title.png","game title")
    this.greeting = createElement("h2")
  }
 setElementPosition () {
   this.titleImg.position(120,80)
this.input.position(width/2-110,height/2-80)
this.playButton.position(width/2-90,height/2-20)
this.greeting.position(width/2-300,height/2-100)
 }
 handleMousePressed() {
   this.playButton.mousePressed(()=>{
     this.input.hide()
     this.playButton.hide()
     var message = `
     Hello ${this.input.value()}
     </br> wait for another player to join`
     this.greeting.html(message)
   })
 }
 display(){
   this.setElementPosition()
   this.handleMousePressed()
 }
}
