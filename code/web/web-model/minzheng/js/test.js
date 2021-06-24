/*const name = 'zmdzmd';
const age = 20;
console.log( name + age)*/

//alert(5555555555)

/*const person = {
	name:'zzzzzz',
	age:'5555',
	sex:'男',
	adress: {
		city:'yichang',
		country:'中国'
	}
}

console.log(person)*/


/*const x = "9";
if (x == 10){
	console.log("x = 10");
}else {
	console.log("x no 10");
}*/


function person(xing,ming,shengri){
	this.xing = xing;
	this. ming = ming;
	this. shengri = new Date(shengri);
}

const xiaoming = new person('zzz','xxx','4-5-1998');
const li = new person('55','22');
console.log(xiaoming);