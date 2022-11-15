import { isTemplateExpression } from "./node_modules/typescript/lib/typescript";

// interface Array<T> {

//   map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
// }

let result = [1, 2, 3].map(function (item) {
  return item.toString();
});

type GF = Array<string | number>;

let afnf: GF = [];

function axc(a: string | number): string {
  if (typeof a === "number") {
    return a.toFixed();
  } else {
    return a.toLocaleLowerCase();
  }
}

Array.isArray;
