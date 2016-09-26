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



