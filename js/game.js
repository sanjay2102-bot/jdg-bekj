class Game {
    constructor() {

    }
    getState() {
        var caref = database.ref('gameState')
        caref.on("value", function (data) {
            gameState = data.val()

        })
    }
    updateState(state) {
        database.ref('/').update({
            //'x':Position.x+x,
            //'y':Position.y+y,
            gameState: state
        })

    }
    start() {
        form = new Form()
        form.display();
        player = new Player()
        player.getCount();
        car1 = createSprite(100, 200)
        car2 = createSprite(300, 200)
        car3 = createSprite(500, 200)
        car4 = createSprite(700, 200)
        cars = [car1, car2, car3, car4]
        car1.addImage(car1img)
        car2.addImage(car2img)
        car3.addImage(car3img)
        car4.addImage(car4img)


    }
    play() {
        Player.getPlayerinfo()
        player.rankCount() 
        if (allPlayers != undefined) {
            image(track1img,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index = 0
            var x = 100
            var y;
            for (var plr in allPlayers) {
                index = index + 1
                x = x + 200
                y = displayHeight - allPlayers[plr].distance
                cars[index - 1].x = x
                cars[index - 1].y = y

                if (index === player.index) {
                  camera.position.x=displayWidth/2
                  camera.position.y= y   
                        text(allPlayers[plr].name,x-25,y+25)
                }

            }

        }
        if (keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance += 10
            player.updateName();
        }
        if(player.distance>4130){
        gameState=2;
        player.rank=player.rank+1
        Player.updateRank(player.rank)
    }
        drawSprites();
}
end(){
    console.log("gameEnded")
    console.log(player.rank);
}

}
