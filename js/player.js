class Player{
    constructor(){
this.name=null;
this.distance=0;
this.index= null;
this.rank=null;
    }
    getCount(){
        var caref=database.ref('playerCount')
        caref.on("value",function(data){
           playerCount=data.val()
       
      }) 
    }
     updateCount(state){
        database.ref('/').update({
        //'x':Position.x+x,
        //'y':Position.y+y,
        playerCount:state
        })
        
    }
    updateName(){
        var playerIndex= "players/player"+ this.index
        database.ref(playerIndex).set({
    
            //'x':Position.x+x,
            //'y':Position.y+y,
            name:this.name,
            distance:this.distance
            })    
    }
    
static getPlayerinfo(){
    var caref=database.ref('players')
    caref.on("value",function(data){
       allPlayers=data.val()
   
})

}
rankCount(){
 var caref=database.ref('ranks')
 caref.on("value",function(data){
    this.rank=data.val()

}) 
}
 static updateRank(state){
    database.ref('/').update({
    //'x':Position.x+x,
    //'y':Position.y+y,
    ranks:state
    })
    
}
}
