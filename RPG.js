//this is the start of our group project//

function player(){
	this.name = name;
	var gold = 0;
	var health = 100;
	this.addGold = function(amount){
	gold += amount;}

	this.depleteHealth=function(amount){
		health -= amount;
	}
	this.getGold = function(){
		return gold;
	}
	this.getHealth = function(){
		return health;
	}

}



function Alien (){
	this.name = "Alien";
	this.weapon="Laser Pistol";
}
function Ninja (){
	this.name = "Ninja";
	this.weapon = "Nunchucks";
}
function Cowboy(){
	this.name = "Cowboy";
	this.weapon = "Rifle";
}


var person;


function initiate(){

document.getElementById("firstChallenge").style.display = "none";
 document.getElementById("secondChallenge").style.display = "none";
 document.getElementById("thirdChallenge").style.display = "none";
document.getElementById("firstUpdate").style.display = "none";
document.getElementById("secondUpdate").style.display = "none";
document.getElementById("thirdUpdate").style.display = "none";
document.getElementById("finalScore").style.display = "none";
}

function chooseAlien(){
	Alien.prototype = new player();
	person = new Alien();

		runGame("Alien");
	}
function chooseNinja(){
	Ninja.prototype = new player();
	person = new Ninja();

		runGame("Ninja");
}
function chooseCowboy(){
	Cowboy.prototype = new player();
	person = new Cowboy();

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

function checkIfAlive(){
	this.isAlive = true
		if (person.getHealth() <= 0){
			this.isAlive = false;
		}
	return this.isAlive;
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
	if(person.name == "Alien"){
		document.getElementById("run").innerHTML = "Your spaceship is summoned and you hop in. You are able to buzz around the monster and out of harm’s way. You move forward without losing health points. You've earned 5 bricks of gold.";
		person.addGold(5);

	}
	else if(person.name == "Ninja"){
		document.getElementById("run").innerHTML = "As a person, you have excellent skills of evasion and are much faster than the monster. You leap at the wall, bounce off with one foot and reach for the fire escape with one hand. You swing from the fire escape and flip over the monster’s head. You land safely past the monster with roll but you’ve used quite a bit of energy – move forward but lose 20 health points. You've earned 5 bricks of gold.";
		person.addGold(5);
		person.depleteHealth(20);
	}
	else if(person.name == "Cowboy"){
		document.getElementById("run").innerHTML = "You jump on your horse and attempt to run past the monster. You’re almost past as the monster knocks you off. The horse kicks the monster and you’re able to run away. The fall caused some injuries – lose 40 health points. You've earned 5 bricks of gold.";
		person.addGold(5);
		person.depleteHealth(40);
	}
	document.getElementById("firstUpdate").style.display = "block";
	document.getElementById("firstChallenge").style.display = "none";
	document.getElementById("goldUpdate").innerHTML = "Total Gold Earned : " + person.getGold();
	document.getElementById("healthUpdate").innerHTML = "Total Health points : " + person.getHealth();


}







function chooseRunTwo(){
	if(person.name == "Alien"){
		document.getElementById("run2").innerHTML = "Your spaceship is summoned and you hop in. You are able to buzz around the assassin and out of harm’s way. You move forward without losing health points. You've earned 5 bricks of gold.";

		person.addGold(5);


	}
	else if(person.name == "Ninja"){
		document.getElementById("run2").innerHTML = "As a person, you have excellent skills of evasion but assassins are also stealthy. You leap at the wall, bounce off with one foot and reach for the fire escape with one hand. You swing from the fire escape and flip to realize the assassin has outsourced you and put a blade through your forearm. You cringe at the pain and yet your swift feet blend into the surroundings and you’ve disappeared – move forward but lose 20 health points. You've earned 5 bricks of gold.";
		person.addGold(5);
		person.depleteHealth(20);
	}
	else if(person.name == "Cowboy"){
		document.getElementById("run2").innerHTML = "You jump on your horse and attempt to run past the assassin. Low and behold he grabs the helm of your saddle and mounts the horse with you. A standing battle ensues and you try to kick the assassin off your horse with your spurred boots. He evades you and you fall. The fall caused some injuries – lose 40 health points. You've earned 5 bricks of gold.";

		person.addGold(5);
		person.depleteHealth(100);
	}
	document.getElementById("secondUpdate").style.display = "block";
	document.getElementById("secondChallenge").style.display = "none";
	document.getElementById("goldUpdate2").innerHTML = "Total Gold Earned : " + person.getGold();
	document.getElementById("healthUpdate2").innerHTML = "Total Health points : " + person.getHealth();
}








function chooseRunThree(){
	if(person.name == "Alien"){
		document.getElementById("run3").innerHTML = "Your spaceship is summoned and you grab hold of corner. The spaceship pulls your leg free and transports you past the quicksand. You move forward without losing health points. You've earned 5 bricks of gold.";
		person.addGold(5);

	}
	else if(person.name == "Ninja"){
		document.getElementById("run3").innerHTML = "As a person, you have excellent skills of evasion but quicksand slows your speed. You try to leap out of the sand and are pulled in deeper. Lose 55 health points and join the merchants below ground. You've earned 5 bricks of gold.";
		person.addGold(5);
		person.depleteHealth(55);
	}
	else if(person.name == "Cowboy"){
		document.getElementById("run3").innerHTML = "You jump on your horse and attempt to run through the quicksand. This is not a wise idea and your horse is swallowed by the sand. You stand on your horse as it drowns alive and despite hopping off its saddle to safety your guilt causes you to– lose 40 health points. You've earned 5 bricks of gold.";
		person.addGold(5);
		person.depleteHealth(40);

	}
	document.getElementById("thirdUpdate").style.display = "block";
	document.getElementById("thirdChallenge").style.display = "none";
	document.getElementById("goldUpdate3").innerHTML = "Total Gold Earned : " + person.getGold();
	document.getElementById("healthUpdate3").innerHTML = "Total Health points : " + person.getHealth();
	displayFinalScore();
}







function chooseFightOne(){
	if(person.name == "Alien"){
		document.getElementById("fight").innerHTML = "You use the lazer to shoot at the monster. He appears to have skin as tough as a trolls’ and the shots only make small cuts. They do seem to keep him back, and you get past. You've earned 5 bricks of gold.";

		person.addGold(5);

	}
	else if(person.name == "Ninja"){
		document.getElementById("fight").innerHTML = "Nunchucks are not best match for monster, you had to get very close to counter attack. You wound it and are able to pass but also get hurt in the process – move forward but lose 40 health points. You've earned 5 bricks of gold.";

		person.addGold(5);
		person.depleteHealth(40);

	}
	else if(person.name == "Cowboy"){
		document.getElementById("fight").innerHTML = "You use the pistol to shoot the monster. He appears to have skin as tough as a trolls’ and the shots only make small cuts. They do seem to keep him back though. You are able to keep shooting as you make your way past him. He is able to get one good swipe in and cuts your shoulder – lose 20 health points. You've earned 5 bricks of gold.";
		person.addGold(5);
		person.depleteHealth(20);

	}
	document.getElementById("firstUpdate").style.display = "block";
	document.getElementById("firstChallenge").style.display = "none";
	document.getElementById("goldUpdate").innerHTML = "Total Gold Earned : " + person.getGold();
	document.getElementById("healthUpdate").innerHTML = "Total Health points : " + person.getHealth();
}






function chooseFightTwo(){
	if(person.name == "Alien"){
		document.getElementById("fight2").innerHTML = "You use the laser to shoot at the assassin. He appears to more clever a troll and uses a reflective mirror to shoot your shots back at you. You are able to keep shooting as you make your way past him but your own shot hits your thigh and you lose 20 health points. You've earned 5 bricks of gold.";

		person.addGold(5);
		person.depleteHealth(20);

	}
	else if(person.name == "Ninja"){
		document.getElementById("fight2").innerHTML = "The assassin smiles awaiting your assault. As you pull out your nunchucks the assassins smug grin disappears as he realizes bringing nunchucks to a sword fight isn’t such a bad idea. The assassin strikes but you jump, flip and deliver a blow to his head. Assassin is stunned – move forward with full health points.  You've earned 5 bricks of gold.";

		person.addGold(5);

	}
	else if(person.name == "Cowboy"){
		document.getElementById("fight2").innerHTML = "You use the pistol to shoot the assassin but not before he agrees to murder you with honor. As your spin on your heels, aim and shoot, he has thrown a dagger that nearly decapitates your head. Alas your shot has hit its mark. The duel is a success. Deep within the assassin's heart, your bullet has hit its mark. The assassin smiles as blood drools down his face and his knees buckle. As he topples onto his back you stare into his eyes and hear him muttering that his life mission is complete - kill or be killed are his dying words as gasps of his blood croak from his punctured lungs and dying mouth – lose 0 health points. You have earned 5 bricks of gold.";

		person.addGold(5);

	}
	document.getElementById("secondUpdate").style.display = "block";
	document.getElementById("secondChallenge").style.display = "none";
	document.getElementById("goldUpdate2").innerHTML = "Total Gold Earned : " + person.getGold();
	document.getElementById("healthUpdate2").innerHTML = "Total Health points : " + person.getHealth();
}







function chooseFightThree(){
	if(person.name == "Alien"){
		document.getElementById("fight3").innerHTML = "You use the laser to shoot at the quicksand. It swallows your shots and pulls you in deeper.  You lose 20 health points.  You've earned 5 bricks of gold.";

		person.addGold(5);
		person.depleteHealth(20);

	}
	else if(person.name == "Ninja"){
		document.getElementById("fight3").innerHTML = "Your only enemy is yourself. You panic looking for a fight to be fought. What you have not realized is that the battle is within. If you can kept calm you can survive. Use your nunchucks to create a helicopter effect and pull yourself from the clutches of the quicksand. Lose 10 points for lost effort and progress on.  You've earned 5 bricks of gold.";

		person.addGold(5);
		person.depleteHealth(10);

	}
	else if(person.name == "Cowboy"){
		document.getElementById("fight3").innerHTML = "You use the pistol to shoot the quicksand. This proves a futile attempt and would have better been used to shoot off your own leg. You sink and joy your brothers down below. Lose 40 health points. You have earned 5 bricks of gold.";

		person.addGold(5);
		person.depleteHealth(40);

	}
	document.getElementById("thirdUpdate").style.display = "block";
	document.getElementById("thirdChallenge").style.display = "none";
	document.getElementById("goldUpdate3").innerHTML = "Total Gold Earned : " + person.getGold();
	document.getElementById("healthUpdate3").innerHTML = "Total Health points : " + person.getHealth();
	displayFinalScore();
}








function chooseProtectOne(){
	if(person.name == "Alien"){
		document.getElementById("protect").innerHTML = "You scrunch up your face and focus all of your brain power on creating a force-field. Aha! You’ve done it…the force field appears around you. You’ve got to use all of your focus and strength for the entire walk around the monster as he beats on the force field. This tires you out – lose 20 health points. You've earned 5 bricks of gold.";

		person.addGold(5);
		person.depleteHealth(20);
	}
	else if(person.name == "Ninja"){
		document.getElementById("protect").innerHTML = "You put on your magical protective cloak and attempt to pass the monster. As he attempts to bike and claw at you, the cloak holds strong and protects you from his blows – move forward and lose no health points.You've earned 5 bricks of gold.";

		person.addGold(5);
	}
	else if(person.name == "Cowboy"){
		document.getElementById("protect").innerHTML = "You pull out your lasso and begin to spin it so fast that it causes a big cloud of dust to appear between you and the monster. Blinded, the monster is unable to see you and you sneak past for a few seconds but he still gets in one swipe and injures your leg - lose 40 health points. You've earned 5 bricks of gold.";
		person.addGold(5);
		person.depleteHealth(40);

	}
	document.getElementById("firstUpdate").style.display = "block";
	document.getElementById("firstChallenge").style.display = "none";
	document.getElementById("goldUpdate").innerHTML = "Total Gold Earned : " + person.getGold();
	document.getElementById("healthUpdate").innerHTML = "Total Health points : " + person.getHealth();
}




function chooseProtectTwo(){
	if(person.name == "Alien"){
		document.getElementById("protect2").innerHTML = "You scrunch up your face and focus all of your brain power on creating a force-field. Aha! You’ve done it…the force field appears around you. You’ve got to use all of your focus and strength for the entire walk around the assassin as he beats on the force field. This tires you out – lose 20 health points. You've earned 5 bricks of gold.";

		person.addGold(5);
		person.depleteHealth(20);
	}
	else if(person.name == "Ninja"){
		document.getElementById("protect2").innerHTML = "You put on your magical protective cloak and attempt to lose the assassin. He is more clever than the monster and shoots an arrow at the helm of your billowing cloak. You advanced with a wounded calf.  Move forward and lose 40 health points. You've earned 5 bricks of gold.";
		person.addGold(5);
		person.depleteHealth(40);
	}
	else if(person.name == "Cowboy"){
		document.getElementById("protect2").innerHTML = "You pull out your lasso and begin to spin it so fast that it causes a big cloud of dust to appear between you and the Assassin. Not phased the assassin pulls his cloak close and jumps into the cloud grasping for your leathered neck.  You escape but lose 40 health points from the assassin's clutches. You've earned 5 bricks of gold.";
		person.addGold(5);
		person.depleteHealth(40);

	}
	document.getElementById("secondUpdate").style.display = "block";
	document.getElementById("secondChallenge").style.display = "none";
	document.getElementById("goldUpdate2").innerHTML = "Total Gold Earned : " + person.getGold();
	document.getElementById("healthUpdate2").innerHTML = "Total Health points : " + person.getHealth();

}






function chooseProtectThree(){
	if(person.name == "Alien"){
		document.getElementById("protect3").innerHTML = "You scrunch up your face and focus all of your brain power on creating a force-field. Aha! You’ve done it…the force field appears around you. You’ve got to use all of your focus and strength for the entire escape from the quicksand. This tires you out – lose 20 health points. You've earned 5 bricks of gold.";

		person.addGold(5);
		person.depleteHealth(20);

	}
	else if(person.name == "Ninja"){
		document.getElementById("protect3").innerHTML = "You lay your magical protective cloak out in an attempt to protect yourself from the sand. The quicksand swallows your cloak as you sink deeper into the sand thinking this never worked at the beach either. lose 40 health points and join your comrades down below. You've earned 5 bricks of gold.";

		person.addGold(5);
		person.depleteHealth(40);

	}
	else if(person.name == "Cowboy"){
		document.getElementById("protect3").innerHTML = "You pull out your lasso capture your horse's neck. He begins running, heeing and hawing as you are pulled to safety.  You escape but lose 20 health points. You've earned 5 bricks of gold.";

		person.addGold(5);
		person.depleteHealth(20);

	}
	document.getElementById("thirdUpdate").style.display = "block";
	document.getElementById("thirdChallenge").style.display = "none";
	document.getElementById("goldUpdate3").innerHTML = "Total Gold Earned : " + person.getGold();
	document.getElementById("healthUpdate3").innerHTML = "Total Health points : " + person.getHealth();
	displayFinalScore();
}





function displayFirstChallenge(){
	 document.getElementById("firstChallenge").style.display = "block";
	 document.getElementById("opening").style.display = "none";
}

function displaySecondChallenge(){

	 document.getElementById("secondChallenge").style.display = "block";
	 document.getElementById("firstUpdate").style.display = "none";
}


function displayThirdChallenge(){
	if (checkIfAlive() == false){
		document.getElementById("secondUpdate").style.display = "none";
		document.getElementById("gameOverMessage1").innerHTML = "Oh No!!! You're too injured to save Javascropolis! Game Over";
		}

	else {
	 document.getElementById("thirdChallenge").style.display = "block";
	 document.getElementById("secondUpdate").style.display = "none";
}


}
function displayFinalScore(){
	document.getElementById("thirdChallenge").style.display = "none";
	document.getElementById("finalScore").style.display = "block";
	document.getElementById("thanks").innerHTML = "Thanks for playing!!";
	document.getElementById("health").innerHTML = "Total Health points : " + person.getHealth();
	document.getElementById("gold").innerHTML = "Total Gold Earned : " + person.getGold();
	if (checkIfAlive() == false){
		document.getElementById("gameOverMessage").innerHTML = "Oh No!!! You're too injured to save Javascropolis! Game Over";
		}
	else if (person.getGold() >= 15){
		document.getElementById("goldMessage").innerHTML = "Alas! You've collected " + person.getGold() + " bricks of gold. That will be enough to get the horrible overlords out of the city! You win."
}
else {
	document.getElementById("goldMessage").innerHTML = "Too bad, you needed 15 bricks of gold to satisfy the evil overlords. You ended with " + person.getGold() + "bricks";
}
}




initiate();
