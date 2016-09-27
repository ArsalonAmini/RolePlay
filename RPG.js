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
characters.prototype = new player();
var alien = new characters();
var cowboy = new characters();
var ninja = new characters();

function initiate(){

document.getElementById("firstChallenge").style.visibility = "hidden";
 document.getElementById("secondChallenge").style.visibility = "hidden";
 document.getElementById("thirdChallenge").style.visibility = "hidden";
document.getElementById("firstUpdate").style.visibility = "hidden";
document.getElementById("secondUpdate").style.visibility = "hidden";
document.getElementById("thirdUpdate").style.visibility = "hidden";
}

function chooseAlien(){
		alien.name="Alien";
		alien.weapon="Laser Pistol";
		alien.gold = 0;
		alien.health=100;
		runGame("Alien");
	}
function chooseNinja(){
		ninja.name = "Ninja";
		ninja.weapon = "Nunchucks";
		ninja.gold =0;
		ninja.health =100;
		runGame("Ninja");
}	
function chooseCowBoy(){
		cowboy.name = "Cowboy";
		cowboy.weapon = "Rifle";
		cowboy.gold =0;
		cowboy.health =100;
		runGame("Cowboy");
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

function chooseChallenge(type, challenge){
	
	if(challenge == "one"){
	switch(type){
		case "run":
			chooseRunOne();
			break;
		case "fight":
			chooseFightOne();
			break;
		case "protect":
			chooseProtectOne();
			break;
	}}
	else if (challenge == "two"){
	switch (type){
		case "run":
			chooseRunTwo();
			break;
		case "fight":
			chooseFightTwo();
			break;
		case "protect":
			chooseProtectTwo();
			break;
	}}
	else if (challenge == "three"){
	switch (type){
		case "run":
			chooseRunThree();
			break;
		case "fight":
			chooseFightThree();
			break;
		case "protect":
			chooseProtectThree();
			break;
	}}

}

function chooseRunOne(){
	if(alien.name == "Alien"){
		document.getElementById("run").innerHTML = "Your spaceship is summoned and you hop in. You are able to buzz around the monster and out of harm’s way. You move forward without losing health points. You've earned 5 bricks of gold.";
		document.getElementById("firstUpdate").style.visibility = "visible";
		document.getElementById("firstChallenge").style.visibility = "hidden";
		alien.addGold(5);
		document.getElementById("goldUpdate").innerHTML = "Total Gold Earned : " + alien.gold;
		document.getElementById("healthUpdate").innerHTML = "Total Health points : " + alien.health;
	}
	else if(ninja.name == "Ninja"){
		document.getElementById("run").innerHTML = "As a ninja, you have excellent skills of evasion and are much faster than the monster. You leap at the wall, bounce off with one foot and reach for the fire escape with one hand. You swing from the fire escape and flip over the monster’s head. You land safely past the monster with roll but you’ve used quite a bit of energy – move forward but lose 20 health points. You've earned 5 bricks of gold.";
		document.getElementById("firstUpdate").style.visibility = "visible";
		document.getElementById("firstChallenge").style.visibility = "hidden";
		ninja.addGold(5);
		ninja.depleteHealth(20);
		document.getElementById("goldUpdate").innerHTML = "Total Gold Earned : " + ninja.gold;
		document.getElementById("healthUpdate").innerHTML = "Total Health points : " + ninja.health;
	}
	else if(cowboy.name == "Cowboy"){
		document.getElementById("run").innerHTML = "You jump on your horse and attempt to run past the monster. You’re almost past as the monster knocks you off. The horse kicks the monster and you’re able to run away. The fall caused some injuries – lose 40 health points. You've earned 5 bricks of gold.";
		document.getElementById("firstUpdate").style.visibility = "visible";
		document.getElementById("firstChallenge").style.visibility = "hidden";
		cowboy.addGold(5);
		cowboy.depleteHealth(40);
		document.getElementById("goldUpdate").innerHTML = "Total Gold Earned : " + cowboy.gold;
		document.getElementById("healthUpdate").innerHTML = "Total Health points : " + cowboy.health;
	}
		
}






function chooseRunTwo(){
	if(alien.name == "Alien"){
		document.getElementById("run2").innerHTML = "Your spaceship is summoned and you hop in. You are able to buzz around the assassin and out of harm’s way. You move forward without losing health points. You've earned 5 bricks of gold.";
		document.getElementById("secondUpdate").style.visibility = "visible";
		document.getElementById("secondChallenge").style.visibility = "hidden";
		alien.addGold(5);
		document.getElementById("goldUpdate2").innerHTML = "Total Gold Earned : " + alien.gold;
		document.getElementById("healthUpdate2").innerHTML = "Total Health points : " + alien.health;

	}
	else if(ninja.name == "Ninja"){
		document.getElementById("run2").innerHTML = "As a ninja, you have excellent skills of evasion but assassins are also stealthy. You leap at the wall, bounce off with one foot and reach for the fire escape with one hand. You swing from the fire escape and flip to realize the assassin has outsourced you and put a blade through your forearm. You cringe at the pain and yet your swift feet blend into the surroundings and you’ve disappeared – move forward but lose 20 health points. You've earned 5 bricks of gold.";
		document.getElementById("secondUpdate").style.visibility = "visible";
		document.getElementById("secondChallenge").style.visibility = "hidden";
		ninja.addGold(5);
		ninja.depleteHealth(20);
		document.getElementById("goldUpdate2").innerHTML = "Total Gold Earned : " + ninja.gold;
		document.getElementById("healthUpdate2").innerHTML = "Total Health points : " + ninja.health;
	}
	else if(cowboy.name == "Cowboy"){
		document.getElementById("run2").innerHTML = "You jump on your horse and attempt to run past the assassin. Low and behold he grabs the helm of your saddle and mounts the horse with you. A standing battle ensues and you try to kick the assassin off your horse with your spurred boots. He evades you and you fall. The fall caused some injuries – lose 40 health points. You've earned 5 bricks of gold.";
		document.getElementById("secondUpdate").style.visibility = "visible";
		document.getElementById("secondChallenge").style.visibility = "hidden";
		cowboy.addGold(5);
		cowboy.depleteHealth(40);
		document.getElementById("goldUpdate2").innerHTML = "Total Gold Earned : " + cowboy.gold;
		document.getElementById("healthUpdate2").innerHTML = "Total Health points : " + cowboy.health;
	}
}








function chooseRunThree(){
	if(alien.name == "Alien"){
		document.getElementById("run3").innerHTML = "Your spaceship is summoned and you grab hold of corner. The spaceship pulls your leg free and transports you past the quicksand. You move forward without losing health points. You've earned 5 bricks of gold.";
		document.getElementById("thirdUpdate").style.visibility = "visible";
		document.getElementById("thirdChallenge").style.visibility = "hidden";
		alien.addGold(5);
		document.getElementById("goldUpdate3").innerHTML = "Total Gold Earned : " + alien.gold;
		document.getElementById("healthUpdate3").innerHTML = "Total Health points : " + alien.health;

	}
	else if(ninja.name == "Ninja"){
		document.getElementById("run3").innerHTML = "As a ninja, you have excellent skills of evasion but quicksand slows your speed. You try to leap out of the sand and are pulled in deeper. Lose 55 health points and join the merchants below ground. You've earned 5 bricks of gold.";
		document.getElementById("thirdUpdate").style.visibility = "visible";
		document.getElementById("thirdChallenge").style.visibility = "hidden";
		ninja.addGold(5);
		ninja.depleteHealth(55);
		document.getElementById("goldUpdate3").innerHTML = "Total Gold Earned : " + ninja.gold;
		document.getElementById("healthUpdate3").innerHTML = "Total Health points : " + ninja.health;		
	}
	else if(cowboy.name == "Cowboy"){
		document.getElementById("run3").innerHTML = "You jump on your horse and attempt to run through the quicksand. This is not a wise idea and your horse is swallowed by the sand. You stand on your horse as it drowns alive and despite hopping off its saddle to safety your guilt causes you to– lose 40 health points. You've earned 5 bricks of gold.";
		document.getElementById("thirdUpdate").style.visibility = "visible";
		document.getElementById("thirdChallenge").style.visibility = "hidden";
		cowboy.addGold(5);
		cowboy.depleteHealth(40);
		document.getElementById("goldUpdate3").innerHTML = "Total Gold Earned : " + cowboy.gold;
		document.getElementById("healthUpdate3").innerHTML = "Total Health points : " + cowboy.health;
	}
}







function chooseFightOne(){
	if(alien.name == "Alien"){
		document.getElementById("fight").innerHTML = "You use the lazer to shoot at the monster. He appears to have skin as tough as a trolls’ and the shots only make small cuts. They do seem to keep him back, and you get past. You've earned 5 bricks of gold.";
		document.getElementById("firstUpdate").style.visibility = "visible";
		document.getElementById("firstChallenge").style.visibility = "hidden";
		alien.addGold(5);
		document.getElementById("goldUpdate").innerHTML = "Total Gold Earned : " + alien.gold;
		document.getElementById("healthUpdate").innerHTML = "Total Health points : " + alien.health;
	}
	else if(ninja.name == "Ninja"){
		document.getElementById("fight").innerHTML = "Nunchucks are not best match for monster, you had to get very close to counter attack. You wound it and are able to pass but also get hurt in the process – move forward but lose 40 health points. You've earned 5 bricks of gold.";
		document.getElementById("firstUpdate").style.visibility = "visible";
		document.getElementById("firstChallenge").style.visibility = "hidden";
		ninja.addGold(5);
		ninja.depleteHealth(40);
		document.getElementById("goldUpdate").innerHTML = "Total Gold Earned : " + ninja.gold;
		document.getElementById("healthUpdate").innerHTML = "Total Health points : " + ninja.health;

	}
	else if(cowboy.name == "Cowboy"){
		document.getElementById("fight").innerHTML = "You use the pistol to shoot the monster. He appears to have skin as tough as a trolls’ and the shots only make small cuts. They do seem to keep him back though. You are able to keep shooting as you make your way past him. He is able to get one good swipe in and cuts your shoulder – lose 20 health points. You've earned 5 bricks of gold.";
		document.getElementById("firstUpdate").style.visibility = "visible";
		document.getElementById("firstChallenge").style.visibility = "hidden";
		cowboy.addGold(5);
		cowboy.depleteHealth(20);
		document.getElementById("goldUpdate").innerHTML = "Total Gold Earned : " + cowboy.gold;
		document.getElementById("healthUpdate").innerHTML = "Total Health points : " + cowboy.health;
	}
}






function chooseFightTwo(){
	if(alien.name == "Alien"){
		document.getElementById("fight2").innerHTML = "You use the laser to shoot at the assassin. He appears to more clever a troll and uses a reflective mirror to shoot your shots back at you. You are able to keep shooting as you make your way past him but your own shot hits your thigh and you lose 20 health points. You've earned 5 bricks of gold.";
		document.getElementById("secondUpdate").style.visibility = "visible";
		document.getElementById("secondChallenge").style.visibility = "hidden";
		alien.addGold(5);
		alien.depleteHealth(20);
		document.getElementById("goldUpdate2").innerHTML = "Total Gold Earned : " + alien.gold;
		document.getElementById("healthUpdate2").innerHTML = "Total Health points : " + alien.health;	
	}
	else if(ninja.name == "Ninja"){
		document.getElementById("fight2").innerHTML = "The assassin smiles awaiting your assault. As you pull out your nunchucks the assassins smug grin disappears as he realizes bringing nunchucks to a sword fight isn’t such a bad idea. The assassin strikes but you jump, flip and deliver a blow to his head. Assassin is stunned – move forward with full health points.  You've earned 5 bricks of gold.";
		document.getElementById("secondUpdate").style.visibility = "visible";
		document.getElementById("secondChallenge").style.visibility = "hidden";
		ninja.addGold(5);
		document.getElementById("goldUpdate2").innerHTML = "Total Gold Earned : " + ninja.gold;
		document.getElementById("healthUpdate2").innerHTML = "Total Health points : " + ninja.health;
	}
	else if(cowboy.name == "Cowboy"){
		document.getElementById("fight2").innerHTML = "You use the pistol to shoot the assassin but not before he agrees to murder you with honor. As your spin on your heels, aim and shoot, he has thrown a dagger that nearly decapitates your head. Alas your shot has hit its mark. The duel is a success. Deep within the assassin's heart, your bullet has hit its mark. The assassin smiles as blood drools down his face and his knees buckle. As he topples onto his back you stare into his eyes and hear him muttering that his life mission is complete - kill or be killed are his dying words as gasps of his blood croak from his punctured lungs and dying mouth – lose 0 health points. You have earned 5 bricks of gold.";
		document.getElementById("secondUpdate").style.visibility = "visible";
		document.getElementById("secondChallenge").style.visibility = "hidden";
		cowboy.addGold(5);
		document.getElementById("goldUpdate2").innerHTML = "Total Gold Earned : " + cowboy.gold;
		document.getElementById("healthUpdate2").innerHTML = "Total Health points : " + cowboy.health;
	}
}







function chooseFightThree(){
	if(alien.name == "Alien"){
		document.getElementById("fight3").innerHTML = "You use the laser to shoot at the quicksand. It swallows your shots and pulls you in deeper.  You lose 20 health points.  You've earned 5 bricks of gold.";
		document.getElementById("thirdUpdate").style.visibility = "visible";
		document.getElementById("thirdChallenge").style.visibility = "hidden";
		alien.addGold(5);
		alien.depleteHealth(20);
		document.getElementById("goldUpdate3").innerHTML = "Total Gold Earned : " + alien.gold;
		document.getElementById("healthUpdate3").innerHTML = "Total Health points : " + alien.health;	
	}
	else if(ninja.name == "Ninja"){
		document.getElementById("fight3").innerHTML = "Your only enemy is yourself. You panic looking for a fight to be fought. What you have not realized is that the battle is within. If you can kept calm you can survive. Use your nunchucks to create a helicopter effect and pull yourself from the clutches of the quicksand. Lose 10 points for lost effort and progress on.  You've earned 5 bricks of gold.";
		document.getElementById("thirdUpdate").style.visibility = "visible";
		document.getElementById("thirdChallenge").style.visibility = "hidden";
		ninja.addGold(5);
		ninja.depleteHealth(10);
		document.getElementById("goldUpdate3").innerHTML = "Total Gold Earned : " + ninja.gold;
		document.getElementById("healthUpdate3").innerHTML = "Total Health points : " + ninja.health;
	}
	else if(cowboy.name == "Cowboy"){
		document.getElementById("fight3").innerHTML = "You use the pistol to shoot the quicksand. This proves a futile attempt and would have better been used to shoot off your own leg. You sink and joy your brothers down below. Lose 40 health points. You have earned 5 bricks of gold.";
		document.getElementById("thirdUpdate").style.visibility = "visible";
		document.getElementById("thirdChallenge").style.visibility = "hidden";
		cowboy.addGold(5);
		cowboy.depleteHealth(40);
		document.getElementById("goldUpdate3").innerHTML = "Total Gold Earned : " + cowboy.gold;
		document.getElementById("healthUpdate3").innerHTML = "Total Health points : " + cowboy.health;
	}
}








function chooseProtectOne(){
	if(alien.name == "Alien"){
		document.getElementById("protect").innerHTML = "You scrunch up your face and focus all of your brain power on creating a force-field. Aha! You’ve done it…the force field appears around you. You’ve got to use all of your focus and strength for the entire walk around the monster as he beats on the force field. This tires you out – lose 20 health points. You've earned 5 bricks of gold.";
		document.getElementById("firstUpdate").style.visibility = "visible";
		document.getElementById("firstChallenge").style.visibility = "hidden";
		alien.addGold(5);
		alien.depleteHealth(20);
		document.getElementById("goldUpdate").innerHTML = "Total Gold Earned : " + alien.gold;
		document.getElementById("healthUpdate").innerHTML = "Total Health points : " + alien.health;	
	}
	else if(ninja.name == "Ninja"){
		document.getElementById("protect").innerHTML = "You put on your magical protective cloak and attempt to pass the monster. As he attempts to bike and claw at you, the cloak holds strong and protects you from his blows – move forward and lose no health points.You've earned 5 bricks of gold.";
		document.getElementById("firstUpdate").style.visibility = "visible";
		document.getElementById("firstChallenge").style.visibility = "hidden";
		ninja.addGold(5);
		document.getElementById("goldUpdate").innerHTML = "Total Gold Earned : " + ninja.gold;
		document.getElementById("healthUpdate").innerHTML = "Total Health points : " + ninja.health;
	}
	else if(cowboy.name == "Cowboy"){
		document.getElementById("protect").innerHTML = "You pull out your lasso and begin to spin it so fast that it causes a big cloud of dust to appear between you and the monster. Blinded, the monster is unable to see you and you sneak past for a few seconds but he still gets in one swipe and injures your leg - lose 40 health points. You've earned 5 bricks of gold.";
		document.getElementById("firstUpdate").style.visibility = "visible";
		document.getElementById("firstChallenge").style.visibility = "hidden";
		cowboy.addGold(5);
		cowboy.depleteHealth(40);
		document.getElementById("goldUpdate").innerHTML = "Total Gold Earned : " + cowboy.gold;
		document.getElementById("healthUpdate").innerHTML = "Total Health points : " + cowboy.health;
	}  
}




function chooseProtectTwo(){
	if(alien.name == "Alien"){
		document.getElementById("protect2").innerHTML = "You scrunch up your face and focus all of your brain power on creating a force-field. Aha! You’ve done it…the force field appears around you. You’ve got to use all of your focus and strength for the entire walk around the assassin as he beats on the force field. This tires you out – lose 20 health points. You've earned 5 bricks of gold.";
		document.getElementById("secondUpdate").style.visibility = "visible";
		document.getElementById("secondChallenge").style.visibility = "hidden";
		alien.addGold(5);
		alien.depleteHealth(20);
		document.getElementById("goldUpdate2").innerHTML = "Total Gold Earned : " + alien.gold;
		document.getElementById("healthUpdate2").innerHTML = "Total Health points : " + alien.health;	
	}
	else if(ninja.name == "Ninja"){
		document.getElementById("protect2").innerHTML = "You put on your magical protective cloak and attempt to lose the assassin. He is more clever than the monster and shoots an arrow at the helm of your billowing cloak. You advanced with a wounded calf.  Move forward and lose 40 health points. You've earned 5 bricks of gold.";
		document.getElementById("secondUpdate").style.visibility = "visible";
		document.getElementById("secondChallenge").style.visibility = "hidden";
		ninja.addGold(5);
		ninja.depleteHealth(40);
		document.getElementById("goldUpdate2").innerHTML = "Total Gold Earned : " + ninja.gold;
		document.getElementById("healthUpdate2").innerHTML = "Total Health points : " + ninja.health;
	}
	else if(cowboy.name == "Cowboy"){
		document.getElementById("protect2").innerHTML = "You pull out your lasso and begin to spin it so fast that it causes a big cloud of dust to appear between you and the Assassin. Not phased the assassin pulls his cloak close and jumps into the cloud grasping for your leathered neck.  You escape but lose 40 health points from the assassin's clutches. You've earned 5 bricks of gold.";
		document.getElementById("secondUpdate").style.visibility = "visible";
		document.getElementById("secondChallenge").style.visibility = "hidden";
		cowboy.addGold(5);
		cowboy.depleteHealth(40);
		document.getElementById("goldUpdate2").innerHTML = "Total Gold Earned : " + cowboy.gold;
		document.getElementById("healthUpdate2").innerHTML = "Total Health points : " + cowboy.health;
	}  
}






function chooseProtectThree(){
	if(alien.name == "Alien"){
		document.getElementById("protect3").innerHTML = "You scrunch up your face and focus all of your brain power on creating a force-field. Aha! You’ve done it…the force field appears around you. You’ve got to use all of your focus and strength for the entire escape from the quicksand. This tires you out – lose 20 health points. You've earned 5 bricks of gold.";
		document.getElementById("thirdUpdate").style.visibility = "visible";
		document.getElementById("thirdChallenge").style.visibility = "hidden";
		alien.addGold(5);
		alien.depleteHealth(20);
		document.getElementById("goldUpdate3").innerHTML = "Total Gold Earned : " + alien.gold;
		document.getElementById("healthUpdate3").innerHTML = "Total Health points : " + alien.health;	
	}
	else if(ninja.name == "Ninja"){
		document.getElementById("protect3").innerHTML = "You lay your magical protective cloak out in an attempt to protect yourself from the sand. The quicksand swallows your cloak as you sink deeper into the sand thinking this never worked at the beach either. lose 40 health points and join your comrades down below. You've earned 5 bricks of gold.";
		document.getElementById("thirdUpdate").style.visibility = "visible";
		document.getElementById("thirdChallenge").style.visibility = "hidden";
		ninja.addGold(5);
		ninja.depleteHealth(40);
		document.getElementById("goldUpdate3").innerHTML = "Total Gold Earned : " + ninja.gold;
		document.getElementById("healthUpdate3").innerHTML = "Total Health points : " + ninja.health;
	}
	else if(cowboy.name == "Cowboy"){
		document.getElementById("protect3").innerHTML = "You pull out your lasso capture your horse's neck. He begins running, heeing and hawing as you are pulled to safety.  You escape but lose 20 health points. You've earned 5 bricks of gold.";
		document.getElementById("thirdUpdate").style.visibility = "visible";
		document.getElementById("thirdChallenge").style.visibility = "hidden";
		cowboy.addGold(5);
		cowboy.depleteHealth(20);
		document.getElementById("goldUpdate3").innerHTML = "Total Gold Earned : " + cowboy.gold;
		document.getElementById("healthUpdate3").innerHTML = "Total Health points : " + cowboy.health;
	}  
}





function displayFirstChallenge(){
	 document.getElementById("firstChallenge").style.visibility = "visible";
	 document.getElementById("opening").style.visibility = "hidden";
}
function displaySecondChallenge(){
	 document.getElementById("secondChallenge").style.visibility = "visible";
	 document.getElementById("firstChallenge").style.visibility = "hidden";
	 document.getElementById("firstUpdate").style.visibility = "hidden";
	// document.getElementById("opening").style.visibility = "hidden";
}

function displayThirdChallenge(){
	 document.getElementById("thirdChallenge").style.visibility = "visible";
	 document.getElementById("secondChallenge").style.visibility = "hidden";
	 document.getElementById("secondUpdate").style.visibility = "hidden";

	// document.getElementById("opening").style.visibility = "hidden";
}


initiate();



