//제네릭이 왜필여하냐


//잘못된함수임
// function add(x: string | number, y: string | number): string | number { return x + y }
// add(1, 2)
// add('1', '2')
// add(1, '2')
//잘못된 타입 add(1,'2')//'12'
//잘못된 타입 add('1',2)//'12'     이둘때매 안됨


//제네릭은 타입에대한 함수이다.추론을 활용하자
//제네릭은 함수를쓸때 정해질수 있도록하는것이다.
// function adb<T extends string|number>(x:T,y:T):T{
// return x+y
// }

// adb(1,2);
// adb(`1`,`2`);

// adb(`1`,2);//막힘
// adb(2,`2`);//막힘

//대신 이런것이통과가됨
// adb(true,false) //이런게통과되는걸 원한게아님
//extends로 제한을준다


//기본값을 줄 수 있다.

// const zvvw=(b=3,c=5)=>{
//   return `3`
// }

// const zvvw=(b:{children:string}={children:`xs`})=>{

// }


//리액트에선 에러날수있음 jsx에서 문법이랑햇갈려서 그래서 기본값너줌
const zvvw =<T = unknown/*T extends unknown도됨 */>(x:T,y:T)=>{
return {x,y};
}

const rexv =zvvw(2,8);



//제네릭분석
interface Array<T>{
  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
  filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
  filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
}


//forEach 제네릭분석

[1,2,3].forEach((value)=>{
  console.log(value);//콘솔에 1,2,3
});

[`4`,2,3].forEach((value)=>{
  console.log(value);//콘솔에 1,2,3
});

[`4`,2,true].forEach((value)=>{
  console.log(value);//콘솔에 1,2,3
});



//map 제네릭분석
const kxxcc=[1,4,5].map((value)=>{
 return value.toString()
})



//filter 제네릭 분석

const firlter =[1,2,3].filter((value)=>value%2);
// const firlter2 =[`1`,2,`3`,4,`5`].filter((value)=>typeof value ==='string');
// ['1','3','5']  string[]이어야하는데 (string | number)[]이렇게뜸 타입스크립트가 추론을 제대로 못하는거임
//

const predicate = (value: string|number): value is string=>typeof value==='string'
const firlter2 =[`1`,2,`3`,4,`5`].filter(predicate);







interface Arr<T>{
  forEach(callback : (item:T )=>void):void;
  map<S>(callback: (v:T)=>S):  S[];
  filter<S extends T/**S는T의 부분집합이야 */>(callback: (v:T)=>v is S):S[];
}
const abxr:Arr<number>=[1,2,3];

abxr.forEach((item)=>{
  console.log(item)
  item.toFixed(1)
});
abxr.forEach((item)=>{
  console.log(item);
  return '3'
})

const abxe:Arr<string>=[`r`,`s`,`e`];
abxe.forEach((item)=>{
  console.log(item);
  item.charAt(4);
});
abxe.forEach((item)=>{
  console.log(item);
  return '3'
})



const zjcjm:Arr<number>=[1,2,3];
const map1=zjcjm.map((v)=>v+1);
const map2=zjcjm.map((v)=>v.toString());

const filter1=zjcjm.filter((v):v is number => v%2===0)//[2]  number[]
const filterarr:Arr<number|string> =[1,'2',3,'4',5]

const filter2=filterarr.filter((v):v is string => v==='string')//['2','4']
// filter2는 (string | number)[]타입이됨 string[]만 나오길원하는데

//형식조건자는 커스텀타입가드를 말하는것
