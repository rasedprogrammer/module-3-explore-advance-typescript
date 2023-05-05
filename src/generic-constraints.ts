// const addMyInfo = <T>(myInfo: T) => {
// 	const salary = 20000;
// 	const concatedInfo = { ...myInfo, salary };
// 	return concatedInfo;
// };
// type MyInfo = {
// 	name: string;
// 	age: number;
// };
// const myInformation: MyInfo = {
// 	name: "Bangladesh",
// 	age: 3600,
// };
// const addMyInfoResult = spreadFunGeneric<MyInfo>(myInfo);

// Generic Constraints Way to declare
interface MyInfoType {
	name: string;
	age: number;
}

const addMyInfo = <T extends MyInfoType>(myInfo: T) => {
	const salary = 20000;
	const concatedInfo = { ...myInfo, salary };
	return concatedInfo;
};
type MyInfo = {
	name: string;
	age: number;
	other1: boolean;
};
const myInformation: MyInfo = {
	name: "Bangladesh",
	age: 3600,
	other1: true,
};
const addMyInfoResult = spreadFunGeneric<MyInfo>(myInformation);
