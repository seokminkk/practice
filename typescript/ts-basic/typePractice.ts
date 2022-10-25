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