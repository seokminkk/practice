//  npx tsc --noEmit 은 타입을 검사해줌 하지만 에디터 쓰면 자동으로해줌
// tsconfig.json 
//js를 타입스크리트로 전환하고싶으면 allowsjs를 트루로바꿔주면 둘다쓸수있음
// npx tsc 하면 ts파일을 js파일로바꿔줌
//symbol 이라는 타입도있음

//타입 추론이 정확하게 되면 굳이 타입을 안정해줘도됨
//any라고 추론하면 정해줘야함


const a: number = 5;
const b: string = 'ab';
const f: true =true;
//d아에 불리언을 원시값으로 타입설정해줄수있음 현재는 true만 받겠다는뜻
//화살표함수 타입
// type Add =(x:number,y:number)=>number;

interface Add{
  (x:number,y:number):number;
}

function add(x: number, y: number): number { return x + y }
const abcd=()=>{};
const abcde: Add = (x, y) => x + y;
const abc: (x: number, y: number) => number = (x, y) => x + y;
const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };
const arr: string[]=['123','rrr'];
const arr2: number[]=[123,456]
const arr3: Array<number>=[123,456];
// <>를 제네릭이라고한다


//길이가 고정된 배열 튜플이라고한다
const arr4 :[number,string,number]=[123,'rr',123,]

//이런식으로 위에 타입만적고 아래쪽에 선언하는경우도있다.
// function bcd(x:number,y:number):number;
// function bcd(x,y){
//   return x+y
// }

let aa=123;
aa='hell' as unknown as number 
//앞에타입을 강제로 바꿔줌

// never타입
//빈배열 사용시 never로되기때문에 string[]로 타입설정해줘야함 const arr:string[]=[]


//!타입 
//!가없으면 Element | null 이렇게뜨는데 무조건 값이 온다 확신하면 !붙이면 null이사라짐
//!대신 if를쓰자
const head = document.querySelector('#head')!;
if (head) {
  console.log(head);
}

const g:string='hello';
const h:String='hell';
//대문자 스트링은 래퍼라는 타입인데 소문자스트링이랑 타입이다르다 조심하자

//커스텀타입
// type World ='world';
// const i:World='world'; 

// 템플릿 리터럴 타입이 존재(유니언 등 사용 가능)
type World = "world" | "hell";

// type Greeting = "hello world"
type Greeting = `hello ${World}`;
const j: Greeting ='hello hell';

let arr5: string[] = [];
let arr6: Array<string> = [];
function rest(...args: string[]|number[]) {}

const tuple: [string, number] = ['1', 1];
tuple[0] = 'hello';
tuple.push('hello');

//이넘enum
// 위에서부터 0123 

const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}
 

//as const 그값을 그대로쓰겟다. 
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

 //이넘없이할려면 typeof keyof 써야함

//  obj 는 typeof 
// It requires an extra line to pull out the keys
type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}
function walk(dir: EDirection) {}
walk(EDirection.Left);
run(ODirection.Right);

const obj2={a:`123`, b:'je',c: 'word'} as const

// 객체를 타입으로 쓰고싶으면 
// type key=obj2; 이렇게 쓰면 typeof쓰라고 알려줌
type key= typeof obj2;
// 여기서 abc라는 키값만뽑고싶으면keyof씀
type key1= keyof typeof obj2;

// 밸류들의 타입들을가져오고싶으면
type value= typeof obj2[keyof typeof obj2]
// as const를해줘야 엄격하게 타입설정되서 밸류들이 string이 아니라 '123','je','word'가나옴

// function add3(x: string | number, y: string | number): string | number { return x + y }
// 안되는코드임 add3은 타입이 결과값이 string|number 하면 숫자만 대입햇을때 문자열함수를못씀
// add3(1, 2)
// add3('1', '2')
// add3(1, '2')

type A = {
    a: string;
}
type B = {
    b: string;
}



const aaa: A | B = { a: 'hello', b: 'world' };
// 유니어 타입은 한개만 만족해도됨
const bbb: A & B = { a: 'hello', b: 'world' };
// intersection 타입은 모두만족해야함 



type Animal ={breath:true};
type Mamal =Animal &{eat:true};
type Human =Mamal &{think:true}

const seokmin: Human ={breath:true,eat:true,think:true}



// interface끼리는 서로 합쳐짐.
interface C { a: string }
interface C { b: string }
const obj1: C = { a: 'hello', b: 'world' }


// type 은 안합쳐짐 에러남 
// type D = { a: string }
// type D = { b: string }
// const obj5: D = { a: 'hello', b: 'world' }

// 인터페이스는 여러번선언가능한데 타입은 같은거또선언하면 에러남


interface E{
  breath:true
}
interface F extends E{
 eat:true
}
const you:F ={ breath:true,eat:true}


// interface랑 type이랑 합쳐질수도 있음

// interface F extends Human{
//   eat:true
// }
// const you:F ={ breath:true,eat:true, think:true}
