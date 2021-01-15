//Create variables here
var dog ,happyDog
var foodS,foodStock
var database
var lastFed,food
function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  
  dog=createSprite(250,300)
  dog.scale=0.2
  dog.addImage(dogImg)

  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}

function draw() {  
   background(46,139,87)

   if(keyWentDown(UP_ARROW)){
     writeStock(foodS)
     dog.addImage(happyDog)
   }

   fill(255,255,254)
   textSize(15)
   if(lastFed>=12){
     text("Last Feed : "+ lastFed%12+" PM",200,50)
   }else if(lastFed===0){
     text("Last Feed : 12 AM",250,50)
   }else{
     text("Last Feed : "+ lastFed + "AM" ,250,50)
   }

  drawSprites();
  //add styles here
  fill("white")
   textSize(13)
   text("Note-PressUP_ARROWKeyToFeedTheDogdMilk",110,11,300,20)
   text("Food remaining : "+foodS,170,200);

   foodDog();
   addFoods();
}

//Function to read the DB
function readStock(data){
  foodS=data.val()
}

//Function to write in DB
function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
  Food:x
  })
}

//function to update the food stock and fed time  
function foodDog(){
dog.addImage(happyDog)

food.updateFoodStock(food.getFoodStock()-1)
database.ref('/').update({
  Food:food.getFoodStock(),
  FeedTime:hour()
})
}

//function to add food in stock 
function addFoods(){
foodS++

database.ref('/').update({
  Food:foodStock
})
}