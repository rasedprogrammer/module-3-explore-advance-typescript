type PersonType = {
	name: string;
	age: number;
	address: string;
};
type NewType = "name" | "age" | "address"; // Menually Type Declare
// Type Declare Keyof Using
type NewTypeKeyOf = keyof PersonType;
// Example NewType
const a: NewType = "name";
const b: NewTypeKeyOf = "age";

// Normal Type Declaration of Keyof Function That give a error beacuse type not defined constraints
function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
	return obj[key];
}

const property = getProperty({ name: "name", value: 100 }, "name");
