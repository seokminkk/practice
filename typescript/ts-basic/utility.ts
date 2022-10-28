//유틸리티 타입  ts에서미리만들어진타입이다

interface Profile{
  name:string,
  age:number,
  married:boolean,
}

const seokmin2: Profile={
  name:'seokmin',
  age:27 ,
  married:false,
}
//이제 결혼정보안알려줘도됨 
//그런데 기존정보때매 다시 인터페이스를 만드냐 ㄴㄴ

//Partial 쓰면댐 기존에있던걸 옵셔널로 만들어줌

const newSeokmin :Partial<Profile>={
  name:'seokmin',
  age:27 ,

}

//partial을 만들어보자
type P<T> ={
  [key in keyof T]?:T[key];
}


const newSeokmin2 :P<Profile>={
  name:'seokmin',
  age:27 ,

}

//pick
// 타입에서 특정 키만 가져옴 
const newSeokmin3 :Pick<Profile, 'name'|'age'>={
  name:'seokmin',
  age:27 ,

}

//Omit 
//타입에서  특정 키만 제외
const newSeokmin4 :Omit<Profile, 'married'>={
  name:'seokmin',
  age:27 ,

}


// Exclude 
type Animal2 ='Cat'|'Dog'|'Human'
type NoPeople= Exclude<Animal2,'Human'>


type Zfx = Exclude<keyof Profile,'married'>




// Pick 과 Omit 을 만들어보자

type Pic<T, S extends keyof T>={
  [key in  S ]:T[key]
}


const newSeokmin5 :Pic<Profile, 'name'|'age'>={
  name:'seokmin',
  age:27 ,

}

//omit 만들기
// extends keyof any 는 그것의 key만가져올수있게끔 valu못들어오게
type O<T,S extends keyof any>=Pic<T,Exclude<keyof T,S>>
const newSeokmin6 :O<Profile, 'married'>={
  name:'seokmin',
  age:27 ,

}



//required
// 옵셔널타입을 필수 타입으로
interface Profile2{
  name?:string,
  age?:number,
  married?:boolean,
}

const seokmin6:Required<Profile2>={
  name:'seokmin',
  age:6,
  married:false,
}

//requried만들자
type Req<T>={
  [key in keyof T]-?: T[key];//-? 는 옵셔널들을 다빼버려라 ?때고가져오ㅏ라라
}

const seokmin7:Req<Profile2>={
  name:'seokmin',
  age:6,
  married:false,
}

seokmin7.name ='honseokmin';

//readonly 
//위처럼 수정못하게 읽기만가능하게할때

type Reqz<T>={
  readonly [key in keyof T]: T[key];
  // -readonly [key in keyof T]: T[key];//readonly때고가져올수도있음
}


//record 
//객체를 가져오는 한방법

interface Objw{
  [key:string]:number;
}
//위처럼 타입설정안하고 Record로 바로해줄수있음
const xve: Record<string,number>= {a:4,b:5}



//nonnullable
// 타입에서 null undefined 빼고가져오고싶을때





