const arrayOfNumber = [1, 2, 3, 4];
const arrayOfString = arrayOfNumber.map((number) => number.toString());
console.log(arrayOfNumber);

type AreaNumber = {
	widht: number;
	height: number;
};

type AreaReadOnly = {
	readonly width: number;
	readonly height: number;
};

// const rectangleArea: AreaReadOnly = {
// 	widht: 10,
// 	height: 10,
// };
// rectangleArea.widht = 10;

// Dynamic Type key in loop
type Area = {
	[key in keyof AreaDynamic]: string;
};

type AreaDynamic = {
	width: number;
	height: number;
	square: number;
};

// Dynamic Type key in loop
type AreaGeneric<T> = {
	readonly [key in keyof T]: T[key];
};
const AreaGenericExample: AreaGeneric<{ name: string; age: number }> = {
	name: "example",
	age: 10,
};
// AreaGenericExample.height = 5.6;

interface A {
	name: string;
}

type IB = number;
