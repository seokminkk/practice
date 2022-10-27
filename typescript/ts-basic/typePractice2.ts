//좁은 타입과 넓은 타입
type G ={name:string};
type H ={age:number};


type I = G&H

type GH=G|H;

const gh:GH={name:'r'}
// const i:I={name:'rr',age:34}

// const i:I=gh 안됨

// const gh:GH=i  //됨
// const i:I={name:'rr',age:34, married:false} 잉여속성검사 해서 안됨 

// 하려면 변수로 빼줘야함
// const obj3 ={name:'rr',age:34, married:false}
// const i:I=obj3


// void

// void 타입은 return값을 사용하지 안 겠다는 뜻(메서드나 매개변수에서는 리턴값 사용 가능, but 조심해야 함)

function k():void{
  return undefined//가능
  // return null//불가능
}
// void는 3가지방식이있다

//리턴값에 보이드 매개변수로 선언한 보이드
function l(callback:()=>void):void{

}
l(()=>{
  return 3
  //왜되냐
  //매개변수가 보이드인함수도 리턴값존재가능(콜백)
})

//매소드가 보이드들어간거
interface People{
  talk:()=>void;
}


const people:People={
  talk() {return 'abc'}
  //왜되냐 
  // 메소드도 리턴값존재가능
}

//매개변수랑 매서드는 상관없다.
//콜백과 메서드읭 보이드의미는 리던값을 사용하지 않겠다는 의미





// declare
//구현부를 만들기싫을떄 앞에 declare선언하면 선언만가능함 밑에
// function forEach(){

// }
// 이런식으로 안해줘도됨 하지만 js로변환하면 declare가사라져서 
// 함수가없는데 함수를 사용하는것처럼보임 하지만 다른데서 선언한거로인식함

// declare function forEach(arr: number[], callback: (el: number,) => undefined): void;
// declare function forEach(arr: number[], callback: (el: number,) => number): void;
declare function forEach(arr: number[], callback: (el: number,) => void): void;
// declare function forEach<T>(arr: T[], callback: (el: T) => void): void;


//void와 undefined의차이
let target: number[] = [];
forEach([1, 2, 3], el => {target.push(el)});
forEach([1, 2, 3], el => target.push(el));

//위에foreach함수에서 언디파인드가 있는데 target은 umber[]타입이니 에러가남
// 위에 foreach함수에 콜백부분 undefined 를 number로 수정하면 에러가 사라짐
// 그런데 void로 선언해도 에러안남
//매개변수에서 쓰이는 보이드는 리턴값이 어떻든 상관하지 않겠다는 의미



// 반대로 undefined는 void 에 대입가능


interface Abab {
    talk: () => void;
}
const abab: Abab = {
    talk() { return 3; }
}

const cbcb= abab.talk() as unknown as number  //as number  
//void가나옴 abab에있는 리턴값을 무시해버림 그래서 void가됨 하지만js 변환하면 리턴값이3으로나옴 
// 원칙적으로이런코드를 짜면안됨 결국 js로 변환되는거 항상 생각해야함
//그래서 as number로 강제로 바꿔줘야한느데 항상바꿀수있는게아님
//그래도 해야겠다 내가책임진다 as unknown as number 로고쳐주면 cbcb타입은 number가된다
//강제로 바꾸는 방법은 as도있고 앞에 <number><unknown>abab.talk() 이런식으로해도
// as unknown as number랑 같은 뜻이된다 하지만 as를쓰는걸추천


// unknown과 any  
// any는 타입검사를 포기해버림 unknown은 타입을 지금당장모르겠을때
//Error 타입이대표적인 unknown AxiosError도있음



//타입 좁히기 (타입가드)

function numOrStr(a: number | string) {
  if (typeof a === 'string') {
    a.split(',');  
  } else {
    a.toFixed(1);
  }
}


function numOrNumArr(a: number | number[]) {
  if (Array.isArray(a)) {// number[]
    a.slice(1);  
  } else {//number
    a.toFixed(1);
  }
}


class O {
  aaa(){}
}
class P {
 bbb(){}
}

//class는 그자체로 타입에올수있음 대신 new O or new P가와야함
//class는 instanceof로 구별해준다
function aorB(param: O|P){
  if (param instanceof O){

    param.aaa();
  }

}

// aorB(O)//에러남
aorB(new O())//가능


//객체는 안에 속성 또는 값으로 구별 할 수 이씅ㅁ
// type ABC = { type: 'b', bbb: string };
// type CDE = { type: 'c', ccc: string };
// type DEF = { type: 'd', ddd: string };
// type AZA = ABC | CDE | DEF;


// 값으로 구분
// function typeCheck(a: AZA) {
//   if (a.type === 'b') {
//     a.bbb;
//   } else if (a.type === 'c') {
//     a.ccc;
//   } else {
//     a.ddd;
//   }
// }


// type ABC = { type: 'b', bbb: string };
// type CDE = { type: 'c', ccc: string };
// type DEF = { type: 'c', ddd: string };
// type AZA = ABC | CDE | DEF;
// //하지만 객체에 value가 동일 하다면 에러남 설정해줘야함
// function typeCheck2(a: AZA) {
//   if (a.type === 'b') {
//     a.bbb;
//   } else if (a.type === 'c') {
//     a.ccc;
//   } else {
//     a.ddd;
//   }
// }


//속성으로구분(key 값으로비교)
// in 연산자 활용
type ABC = { type: 'b', bbb: string };
type CDE = { type: 'c', ccc: string };
type DEF = { type: 'd', ddd: string };
type AZA = ABC | CDE | DEF;
function typeCheck2(a: AZA) {
  if ('bbb'in a) {
    a.bbb;
  } else if ('ccc' in a) {
    a.ccc;
  } else {
    a.ddd;
  }
}

//커스텀타입가드

interface Cat { meow: number }
interface Dog { bow: number }
function catOrDog(a: Cat | Dog): a is Dog {
  //타입판별직접만듬 //강아지려면 meow가없어야함
  //리턴타입값에 is가 있으면 커스텀 타입 가드 함수다 if문안에쓴다
  if ((a as Cat).meow) { return false }
  return true;
}

//타입을 구분햊는 커스텀함수
function pet(a:Cat|Dog){
 if(catOrDog(a)){
  console.log(a.bow)
 }
 if('meow' in a){
  console.log(a.meow)
 }
}

// const cat: Cat | Dog = { meow: 3 }
// if (catOrDog(cat)) {
//     console.log(cat.meow);
// }
// if ('meow' in cat) {
//     console.log(cat.meow);
// }



// is를 안쓰면 타입추론이 제대로 안될때가 있음 그럴때도씀



//실패한것들 걸러보고싶을때
const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult => {
 return input.status === 'rejected';
}

//성공한것들 걸러 보고싶을때
const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> =>{
 return input.status === 'fulfilled';

} 




const promises = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);
const errors = promises.filter(isRejected);

export {};


// {}와 Object   모든타입이다  단null 과 undefined 제외 실제객채는 object소문자이다
// const abce:{}=null    에러남

const abce:{}='hello'
const abxrer:Object='hi'// {}와 Object  모든타입이다
// const xx:object='hi' //에러남



interface Abxt {
  readonly a: string; //읽기전용타입
  b: string;
}

const aavsx:Abxt={a:'rr',b:'re'}
// aavsx.a=12 reonly 읽기전용 속성이라 에러남 고칠수가없음


// 인덱스시그니쳐
//키와 값이다 문자열이엇음좋겟어
// type AXVW={[key:string]:string};

// type AXVW={[key:number]:string};



// 맵드타입스
type CVXE ='pet'|'human'|'machin'

type AXVW={[key in CVXE]:string};


//클래스

//implements:인터페이스를 따라야함    private protected

//implements class의 모양을 interface가 통제할수있음

interface REXXZF {
  readonly a: string;
  b: string;
}
class ZFCV implements REXXZF {
  readonly a: string=`123`;
      b: string=`잭`;
     c:string =`wd` //기본으로 public으로설정됨
  
     method(){
      console.log(this.a) // 안에서접근가능
     }
  }
  


// class ZFCV implements REXXZF {
//    private a: string=`123`;
//    protected b: string=`잭`;
//    c:string =`wd` //기본으로 public으로설정됨

//    method(){
//     console.log(this.a) // 안에서접근가능
//    }
// }

//private 속성은 클래스 ZFCV안에서만 접근할수있게함
class C extends ZFCV {
  method(): void {
  //  console.log(this.a)//안됨
   console.log(this.b)//가능

  }

}
// new C().a;   외부에서 안됨
// new C().b;

// private과 protected 차이가머냐
//똑같이 외부에서접근못하지만 protected는 상속받은애들은 접근가능

//            public    protected      private
//클래스내부  o               o           o     
// 인스턴스   o               x           x
// 상속클래스 o               o           x



//class에 추상을 부여하고싶으면 abstract를 쓴다 class는 js로변해도 안사라진다 


//옵셔널
function zfec(a: number, b?: number, c?: number) {}
// function zfec(...arg: number[]) {} //갯수 상관없이 다받고싶으면 이렇게써야함

zfec(1)
zfec(1, 2)
zfec(1, 2, 3)
// zfec(1, 2, 3, 4)//안됨 갯수3개임 갯수상관없이받고싶으면


let obj: { a: string, b?: string }  = { a: 'hello', b: 'world' } //대신c는있으면 안됨
obj = { a: 'hello' };