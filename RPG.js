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
document.getElementById("firstChallenge").style.visibility = "hidden";
characters.prototype = new player();
choosePlayer();


//alien.depleteHealth;

}
function chooseAlien(){
	var alien = new characters();
		alien.name="Alien";
		alien.weapon="Laser Pistol";
		runGame("Alien");
	}
function chooseNinja(){
	var ninja = new characters();
		ninja.name = "Ninja";
		ninja.weapon = "Nunchucks";
		runGame("Ninja");
}	
function chooseCowBoy(){
	var cowboy = new characters();
		cowboy.name = "Cowboy";
		cowboy.weapon = "Rifle";
		runGame("Cowboy");
}



function choosePlayer(name){
	if(name == "Alien")
	{
		


	}
	if(name == "Ninja")
	{
		
	}
	if(name == "Cowboy")
	{
		
		cowboy.weapon = "Rifle";
	}
	
}
function runGame(name){
	switch(name){
		case "Alien":
			displayFirstChallenge();
			break;
		case "Ninja":
			displayFirstChallenge();
			break;
		case "Cowboy":
			displayFirstChallenge();
			break;
	}
	
}


function displayFirstChallenge(){
	 document.getElementById("firstChallenge").style.visibility = "visible";
	 document.getElementById("opening").style.visibility = "hidden";
}

initiate();



