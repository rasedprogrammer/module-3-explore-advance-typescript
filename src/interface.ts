// Alias Type
type User = {
	name: string;
	age: number;
};
type ExtendedUser = User & {
	role: string;
};
const userWithUnionAlias: ExtendedUser = {
	name: "Not Human2",
	age: 5000,
	role: "Immortal2",
};
// console.log({ userWithUnionAlias });

// Interface Type
interface IUser {
	name: string;
	age: number;
}
interface IExtenedUser extends IUser {
	role: string;
}
const userWithExtendedRole: IExtenedUser = {
	name: "Not Human",
	age: 3000,
	role: "Immortal",
};
// console.log({ userWithExtendedRole });

// Interface Object
const typeWithInterfaces: IUser = {
	name: "User 02",
	age: 200,
};

// Alias Type Object
// const typeWithAlias: User = {
// 	name: "User 01",
// 	age: 100,
// };

// Alias type with function parameter type declare
type AddNumberFun = (num1: number, num2: number) => number;
// Interfacce type with function parameter type declare
interface IAddNumberFun {
	(num1: number, num2: number): number;
}
// Alias Type Function
const addNumbers: AddNumberFun = (num1, num2) => num1 + num2;
// Interface Function Type
const addNumbers2: IAddNumberFun = (num1, num2) => num1 + num2;

// type rollNumber = number[index: number]: number;
// interface IRollNumber {
//   // Index elias
// 	[index: string]: string;
// }
// // Use Type Alias
// const rollNumbers: rollNumber = [1, 2, 3, 4, 5];
// // Use Type Interface
// const rollNumbers2: IRollNumber = [1, 2, 3, 4, 5];
