// Normal Arrow Function
const createArrowFunc = (param: string): string[] => {
	return [param];
};
// Generic Function
const createArrowFunc1 = <T>(param: T): T[] => {
	return [param];
};
const result = createArrowFunc("Bangladesh");
const result1 = createArrowFunc1<string>("Bangladesh");
const result2 = createArrowFunc1<number>(22);
const result3 = createArrowFunc1<{ name: string }>({ name: "Bangladesh" });
// ShortForm
type obj = { name: string };
const result4 = createArrowFunc1<obj>({ name: "Bangladesh" });

// Tuple Generic Function
const createTupleFunc = <X, Y>(param1: X, param2: Y): [X, Y] => {
	return [param1, param2];
};
const tupleResult = createTupleFunc<string, string>("Bangla", "desh");
const tupleResult1 = createTupleFunc<number, number>(22, 33);

// Spread Operator
const salary = 20000;
const myInfo = {
	name: "Bangladesh",
	age: 3600,
};
const concatedInfo = { ...myInfo, salary };
// Spread Operator Function Way
const spreadFun = (myInfo: object) => {
	const salary = 20000;
	const concatedInfo = { ...myInfo, salary };
	return concatedInfo;
};
const spreadFunResult = spreadFun(myInfo);

// Spread Operator Function Generic Way
const spreadFunGeneric = <T>(myInfo: T) => {
	const salary = 20000;
	const concatedInfo = { ...myInfo, salary };
	return concatedInfo;
};
const spreadFunGenericResult = spreadFunGeneric(myInfo);

// Normal Function Generic Way
function normalFunctionGeneric<T>(num: T): T {
	return num;
}
