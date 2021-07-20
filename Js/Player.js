class Player{                         
    constructor(){
        this.index = null
        this.name = ""
        this.distance = 0
        this.rank = 0
    }   
    getCount(){
        var dbref = database.ref("playerCount")
        dbref.on("value", function(data) {
            playerCount = data.val()
        })

    }       
    updateCount(count){
        database.ref("/").update({playerCount:count})
    }
    update()
    {
        var playerIndex = 'Players/player'+ this.index
        database.ref(playerIndex).update({name:this.name,distance:this.distance,rank:this.rank})

    }
    getFinishedCarsCount(){
        var dbref = database.ref("finishedCars")
        dbref.on("value",(data)=>{
            this.rank = data.val()
        })
    }
    static getAllPlyrsInfo(){
       var dbref = database.ref("Players")
       dbref.on("value", (data)=>{
           allPlayers = data.val()  //player1 -> name:, distance, player2 - name, distance
       })

    }

    static updateFinishedCars(count){
        database.ref("/").update({finishedCars:count})

        var dbref = database.ref("finishedCars");
        dbref.on("value",(data)=>{
            finishedcars = data.val()
        })
        console.log("FinishedCars",finishedcars)
    }
}    