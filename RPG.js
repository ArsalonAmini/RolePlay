//this is the start of our group project//
function player(){
	this.name = name;
	this.gold = 0;
	this.health = 100;
}
function characters(){
	this.addGold = function(amount){
		this.gold += amount;
	}
}	
player.prototype.getName = function(){
	return this.name;
}
player.prototype.depleteHealth=function(amount){
	this.health -= amount;
}
function initiate(){
characters.prototype = new player();
var alien = new characters();
alien.name="Alien";
alien.weapon="Laser Pistol";
alien.addGold(10);
alien.depleteHealth(2);
var ninja = new characters();
ninja.name = "Ninja";
ninja.weapon = "Nunchucks";
ninja.addGold(20);
ninja.depleteHealth(5);
var cowboy = new characters();
cowboy.name = "Cowboy";
cowboy.weapon = "Rifle";
cowboy.addGold(5);
cowboy.depleteHealth(5);
console.log(alien);
console.log(ninja);
console.log(cowboy);
//alien.depleteHealth;

}
function choosePlayer(name){
	if(name == "Alien")
	{
		alien.addGold(10);

	}
	if(name == "Ninja")
	{
		ninja.addGold(10);
	}
	if(name == "Cowboy")
	{
		cowboy.addGold(10);
		alert(gold);
	}
	
}
function runGame(name){
	switch(name){
		case "Alien":
			answer="";
			break;
		case "Ninja":
			answer="";
			break;
		case "Cowboy":
			answer="";
			break;
	}
	return answer;
}
function print(){
	var msg ="hello";
	return msg;
	//document.getElementById("message").innerHtml = "hello";
}

initiate();


//this is the Start of Arsalon's Obstacle OOP ///
