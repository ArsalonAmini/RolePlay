//this is the start of our group project//
















































//this is the Start of Arsalon's Obstacle OOP ///




function Obstacle(){
    Obstacle.prototype.attackPlayer = function(player){
        return this.playerHealth;
    };
    
    function DepleteHealth(player){
        this.reduceHealth = function(){ var health = player.health - 5; return this.health; }
    };
    DepleteHealth.prototype = new Obstacle();


var monster = Object.create(Obstacle);
var Assassin = Object.create(Ob)

Monster.prototype.AttactPlayer = function (player){
    player.healthPoints = +-10;
    return player;
}

















Monster.constructor;
Assassin.constructor;
QuickSand.constructor;
