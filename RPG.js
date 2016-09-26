//this is the start of our group project//
function player(name,weapon){
	this.name = name;
	this.gold = 0 ;
	this.health = 100;
	this.weapon = weapon;
}
player.prototype.getName = function(){
	return this.name;
}

player.prototype.getTransport=function(name){
		if(player.name = name){
			this.gold += gold;
			this.health -= health;
		}
		return this.gold,this.health;
}
player.prototype.useWeapon=function(){

}
player.prototype.useProtectSelf= function(){

}

function initiate(){
var alien = Object.create(player);
alien.weapon = "Laser Pistol";
var ninja = Object.create(player);
ninja.weapon = "Nunchucks";
var cowboy = Object.create(player);
cowboy.weapon = "Rifle";
  
alien.getTransport;


}
initiate();


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

