class Food {
    constructor(){
        this.foodStock
        var lastFed
        this.image=loadImage("images/Milk(1).png")
        this.food=createButton("Feed the Dog")
        this.addFood=createButton("AddFood")

    }
    display(){
        var x=80,y=100

        imageMode(CENTER)
        image(this.image,720,220,70,70)
        
        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80
                    y=y+50
                }
                image(this.image,x,y,50,50)
                x=x+30
            }
        }
        this.food=position(700,95)
        this.food.mousePressed(feedDog)
        
        this.addFood=position(800,95)
        this.addFood.mousePressed(addfoods)
    }
    getFoodStock(){
     database.ref('/').update();
    }
    updateFoodStock(){
        database.ref('/').update();
    }
    deductFood(){
        
    }
}