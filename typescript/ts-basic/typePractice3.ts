//공변성,반공변성


// function axv(x: string): number {
//   return +x;
// }
// type Bfsd = (x: string) => number | string;
// const bdc: Bfsd = axv;//???axv의 리턴값이 number인데 된다? 서로 타입이 다른데 된다
//Bfsd리턴값이 넓어서 된다 number|string


//반대는안댐 리턴값이 넓은대서 쫍은대로는 안댐
// function axv(x: string): number | string {
//   return +x;
// }
// type Bfsd = (x: string) => number ;
// const bdc: Bfsd = axv


//매개변수

function axv(x: string|number): number  {
  return +x;
}
type Bfsd = (x: string) => number ;
const bdc: Bfsd = axv




//오버로딩 함수이름 같은거 여러개 선언
function abxere(x: number, y: number): number
function abxere(x: string, y: string): string
function abxere(x: any, y: any) {
  return x + y;
}


interface Add {
  (x: number, y: number): number;
  (x: string, y: string): string;
}
const rffrf: Add = (x: any, y: any) => x + y;
rffrf(8,6)//위에함수는 x,y가any이지만  Add타입이 걸러줘서 찾아서해줌





//Error 처리법
interface Axios{
  get():void;
}
declare const axios:Axios;

class CustomError extends Error{
  
    stack?: string;
  response?:{
    data:any;
  }
}

(async()=>{
  try {
    await axios.get();

  }catch(err){
    if(err instanceof CustomError /**타입가드로 좁혀주면 밑에서 as 안써도됨 */){

      // const customError=err as CustomError
      console.error((err as CustomError).response?.data);
      console.error(err.response?.data);

      // err.response?.data // 위에서as로정해줘도 까먹음 1회성이라서 그래서
      //계속 as를 써줘야하는데 그냥 변수에할당해주자
      //as는 unknown일때써준다
      // customError.response?.data
    }
  }
  
})();

//infer
