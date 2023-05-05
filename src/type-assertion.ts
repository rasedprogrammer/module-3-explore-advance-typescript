// const emni: any;
// const emni2: any;

// emni = "Next Level Programmer";
// emni2 = 2222;
// (emni as string).length;
// (emni2 as number).toFixed(2);

// Type Assertion function
const kgToGram = (
	param: string | number | undefined
): string | number | undefined => {
	if (typeof param === "string") {
		const value = parseFloat(param) * 1000;
		return `The converted result is ${value} gram.`;
	}
	if (typeof param === "number") {
		const value = param * 1000;
		return value;
	}
};
const resultToNumber = kgToGram(1000) as number;
const resultToString = kgToGram("1000") as string;
// console.log(resultToNumber);
// console.log(resultToString);

// Another Example
type CustomErrorType = {
	message: string;
};
try {
} catch (err) {
	console.log((err as CustomErrorType).message);
}
