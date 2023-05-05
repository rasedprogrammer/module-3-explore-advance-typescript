type a1 = string;
type a2 = null;
type a3 = undefined;
type a4 = number;

// Normal Conditional type Check Declare
type a5 = a1 extends string ? string : null;

// Nasted Conditional
type a6 = a1 extends string
	? string
	: a2 extends number
	? number
	: a3 extends null
	? null
	: a4 extends undefined
	? any
	: never;

type sheikh = {
	wife1: string;
	wife2: string;
};

type checkProperty<T, Y> = Y extends keyof sheikh ? true : false;
type checkWife = checkProperty<sheikh, "wife1">;

// type checkProperty<T> = T extends { wife1: string } ? true : false;
// type checkWife = checkProperty<sheikh>;

//Fixed Value type letteral remove value conditional way
type Friends = "F1" | "F2" | "F3";

type RemoveFrineds<T, Y> = T extends Y ? never : T;

type CheckCurrentFrinds = RemoveFrineds<Friends, "F2">;
