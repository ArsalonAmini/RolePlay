//this is the start of our group project//
















































//this is the Start of Arsalon's Obstacle OOP ///
function Obstacle (player){
    this.player = player;
}
Obstacle.prototype.depleteHealth = function(player){
    player.health -= 5;
    return this.player;
}
Obstacle.prototype.giveGold = function(player){
    player.gold += 1;
    return this.player;
}

function Monstor(){
    Monstor.prototype = object.create(Obstacle.prototype);
}
Monstor.prototype.depleteHealth -=10;
Monstor.prototype.giveGold += 0; 

function Assassin(){
    Assassin.prototype = object.create(Obstacle.prototype);
}
Assassin.prototype.depleteHealth -=5;
Assassin.prototype.giveGold += 0; 


function Wizard(){
    Wizard.prototype = object.create(Obstacle.prototype);
}
Wizard.prototype.depleteHealth =0;
Wizard.prototype.giveGold += 10; 







