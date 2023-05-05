// Simple Generic Array Type
type GenericArrayType<T> = Array<T>;

// const rollNumbers: Array<number> = [1, 2, 3, 4];
// Replace Previous Array Type with Generic
const rollNumbers: GenericArrayType<number> = [1, 2, 3, 4];
const rollNumbers2: GenericArrayType<string> = ["1", "2", "3", "4"];
const rollNumbers3: GenericArrayType<boolean> = [true, false];

// Type alias For Replace Generic Array Type
type nameRollType = { name: string; role: number };
// New Way to Replace Generic Array Type with Type Alias
const rollNumbersObj: GenericArrayType<nameRollType> = [
	{ name: "Name A", role: 5 },
	{ name: "Name b", role: 6 },
];

// Replace Previous Array Type with Generic
// const rollNumbersObj: GenericArrayType<nameRollType> = [
// 	{ name: "Name A", role: 5 },
// 	{ name: "Name b", role: 6 },
// ];

// const rollNumbers: Array<number> = [1, 2, 3, 4];
// const rollNumbers2: Array<string> = ["1", "2", "3", "4"];
// const rollNumbers3: Array<boolean> = [true, false];

// const rollNumbersObj: Array<{ name: string; role: number }> = [
// 	{ name: "Name A", role: 5 },
// 	{ name: "Name b", role: 6 },
// ];

// const genericWithTuple: GenericTuple<string, number> = ["Rased", 27];
// // This is not the Best Way
// const genericWithTupleObject: GenericTuple<object, number> = [
// 	{
// 		name: "Rased",
// 		salary: 200000,
// 	},
// 	27,
// ];

// Generic and Tuple

// Generic Type Alias
type GenericTuple<X, Y> = [X, Y];

// Type Alias For Object Type Generic
interface relationWithObj {
	name: string;
	salary: number;
}
// The Best way to object declare
const genericWithTupleObjectBestWay: GenericTuple<relationWithObj, number> = [
	{ name: "Rased", salary: 200000 },
	27,
];

// The Best way to object declare Because you can't not change the object key value
// const genericWithTupleObjectBestWay2: GenericTuple<relationWithObj, number> = [
// 	{ name: "Rased", salary: "200000" },
// 	27,
// ];

/**
 * // Type Alias For Object Type Generic
type relationWithObj = { name: string; salary: number };
// The Best way to object declare
const genericWithTupleObjectBestWay: GenericTuple<relationWithObj, number> = [
	{ name: "Rased", salary: 200000 },
	27,
];

// The Best way to object declare Because you can't not change the object key value
const genericWithTupleObjectBestWay2: GenericTuple<relationWithObj, number> = [
	{ name: "Rased", salary: "200000" },
	27,
];
 */

/**
 * // The Best way to object declare
const genericWithTupleObjectBestWay: GenericTuple<
	{ name: string; salary: number },
	number
> = [{ name: "Rased", salary: 200000 }, 27];

// The Best way to object declare Because you can't not change the object key value
const genericWithTupleObjectBestWay2: GenericTuple<
	{ name: string; salary: number },
	number
> = [{ name: "Rased", salary: "200000" }, 27];
 */
