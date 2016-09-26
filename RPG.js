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
player.prototype.addGold = function(amount){
	this.gold += amount;
}
player.prototype.depleteHealth=function(amount){
	this.health -= amount;
}

function initiate(){
var alien = new player("Alien");
alien.weapon = "Laser Pistol";
var ninja = new player("Ninja");
ninja.weapon = "Nunchucks";
var cowboy = new player("Cowboy");
cowboy.weapon = "Rifle";

 alien.addGold(10);
 alien.depleteHealth(2);
 console.log(alien);
alien.depleteHealth;


}
initiate();

