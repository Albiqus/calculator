let inputA = document.querySelector('.inputA');
let inputB = document.querySelector('.inputB');
let inputС = document.querySelector('.inputC');
let inputD = document.querySelector('.inputD');
let button = document.querySelector('.button');

let block = document.getElementById('block');
let element = document.createElement('p');
let element2 = document.createElement('p');
let element3 = document.createElement('p');

let number;
let cars;
let ostatok;

inputС.value = 1.4;
inputD.value = 20;

button.onclick = function(){
	number = Math.ceil(Number(inputA.value) * Number(inputB.value) * Number(inputС.value));
	element.innerHTML = 'Объём: ' + number + ' м2';
	block.appendChild(element);


	let dopCar = 0;
	if(number % inputD.value >= inputD.value/2){dopCar++;
} 
    cars = Math.floor(number/inputD.value) + dopCar;
	element2.innerHTML = 'Машин: ' + cars + ' шт';
	block.appendChild(element2);

	if(number % inputD.value < inputD.value/2){
		ostatok = number % inputD.value;
	element3.innerHTML = 'Остаток: '+ ostatok + ' м2';
	block.appendChild(element3);
	}else{
		element3.innerHTML = 'Остаток: '+ ostatok + ' м2';
	block.appendChild(element3);
}

	dopCar=0;
	cars = 0;
	ostatok = 0;
	number = 0;
}
