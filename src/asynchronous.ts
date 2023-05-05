interface DataType {
	data: string;
}
const myPromiseObj = (): Promise<DataType> => {
	return new Promise<DataType>((resolve, reject) => {
		const data: DataType = { data: "Data feace successfully." };
		if (data) {
			resolve(data);
		} else {
			reject(new Error("Data feace failed"));
		}
	});
};
const getPromiseObj = async (): Promise<DataType> => {
	const data = await myPromiseObj();
	return data;
};

// Json placeholder api using pormise
interface ITodo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}
const getData = async (): Promise<ITodo> => {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	return await response.json();
};
const getTodoData = async (): Promise<void> => {
	const data = await getData();
	console.log(data);
};
// getTodoData();

// Question 05
function getArrayItem<T, K extends keyof T>(
	arr: T[],
	index: number,
	key: K
): T[K] {
	const item = arr[index];

	return item[key];
}

const users = [
	{ name: "John", age: 30 },
	{ name: "Mary", age: 25 },
];

//console.log(getArrayItem(users, 0, "name")); // Answer : String.

// question 7
// type Data = { num1: number };

// type B = {
// 	[key in keyof Data]: string;
// };

// const numbers: B = {
// 	// num1: 20,
// };
// Question 8
interface Person {
	firstName: string;

	lastName: string;
}

const person2 = {
	firstName: "John",
	lastName: "Doe",
};

function fullName<T extends Person>(person: T): string {
	const person3 = `${person.firstName} ${person.lastName}`;
	return person3;
}
// console.log(fullName(person2));
// Answer : String
