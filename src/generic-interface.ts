// Generic Interface  Type
interface GenericInterfaceTypeTest<T> {
	name: string;
	job: T;
}
// Expample
const checkGenericInterface: GenericInterfaceTypeTest<string> = {
	name: "GenericInterfaceTypeTest",
	job: "Software Enginner",
};

// Advance topic
interface GenericAdvancedTypeObj {
	name: string;
	age: number;
}
const checkGenericInterfaceAdvanceTopic: GenericInterfaceTypeTest<GenericAdvancedTypeObj> =
	{
		name: "GenericInterfaceTypeTest2",
		job: {
			name: "Rased",
			age: 20,
		},
	};

// Double Or More parameter in Generic Interface
interface GenericInterfaceTypeTestMulti<T, U, Y> {
	name: string;
	job: T;
	salary: U;
	location?: Y;
}
// Example
// Type of object type declare
interface IObjectTypeTest {
	companyName: string;
	ceoName: string;
}
const CheckMultipleGenericInterface: GenericInterfaceTypeTestMulti<
	IObjectTypeTest,
	number,
	string
> = {
	name: "GenericInterfaceTypeTestMulti",
	job: {
		companyName: "M.M. Services Ltd",
		ceoName: "Nothing",
	},
	salary: 140,
	location: "Dhaka",
};
// Without one Generic type not defined
const CheckMultipleGenericInterface2: GenericInterfaceTypeTestMulti<
	IObjectTypeTest,
	number,
	null
> = {
	name: "GenericInterfaceTypeTestMulti",
	job: {
		companyName: "M.M. Services Ltd",
		ceoName: "Nothing",
	},
	salary: 140,
};
