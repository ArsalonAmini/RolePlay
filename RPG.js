//this is the start of our group project//
function Player(){
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
function Alien(){
	this.weapon = laser;
		};
Alien.prototype = new Player();
function Ninja (){
	this.weapon = NunChucks;
		};
Ninja.prototype = new Player();

function Cowboy (){
	this.weapon = pistol;
		};
	Cowboy.prototype = new Player();

alien.addGold(10);
alien.depleteHealth(2);
console.log(alien);
alien.depleteHealth;


function chooseAlien(){
	var alien = new Alien();
	startGame(alien);
}

function chooseCowBoy(){
	var cowBoy = new Cowboy();
}

function  chooseNinja(){
	var ninja = new Ninja();
}

function startGame(player){
alert(monster);



