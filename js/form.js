class Form{
    constructor(){
        this.input=createInput("name")
        this.button=createButton("start")
        this.greeting= createElement('h2')
        this.reset= createButton("reset")
    }
    display(){
    var title = createElement ('h2')
  title.html("carRacing")
  title.position(150,200)  
  this.input.position(160,170)
  this.button.position(130,170)
  this.reset.position(200,100)
  this.button.mousePressed(()=>{
    player.name= this.input.value()
    playerCount=playerCount+1
    console.log(playerCount)
    player.index=playerCount
    player.updateName()
    player.updateCount(playerCount)
    this.greeting.html("Hello "+ player.name) 

    this.greeting.position(130, 100);
  })
  this.reset.mousePressed(()=>{
    player.updateCount(0)
    game.updateState(0)
  }) 

  
}
}
