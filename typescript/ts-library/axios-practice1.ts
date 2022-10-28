import axios, { AxiosError, AxiosResponse } from  'axios';



//export default axios;이다
//export = 있으면 commonjs 모듈이다 
// 그러면 import axios =require('axios')이런식


interface Get{
  userId:number,
  id:string,
  title:string,
}
interface Create{}

interface Data{
  title:string,
  body:string,
  userId:number
}
(async()=>{
  try{
//사용방법이3개다 //Axios는 class이면서 함수이면서 객체이기때문
    // new axios();
    // axios();
    // axios.get()

  const response= await axios.get<Get ,AxiosResponse<Get>>('https://jsonplaceholder.typicode.com/posts/1');
  //  response.data
  console.log(response.data)
  console.log(response.data.userId)
  console.log(response.data.id)

  const response2 =await axios.post<Create,AxiosResponse<Create> ,Data>('https://jsonplaceholder.typicode.com/posts',{
    title:'foo',
    body: 'bar',
    // userId: 'r',//에러남
    userId: 5,
    
  });

  const response3 =await axios({
    method:'post',
    url:'https://jsonplaceholder.typicode.com/posts',
    data:{
      title:'foo',
      body: 'bar',
      userId: 1,
    },
  })

  //data 타입이 any이다
  // get<T = any, R = AxiosResponse<T>, D = any>의 제네릭 첫번재 가 any이기때문 
  } catch (error){
    if(axios.isAxiosError(error)  /**error instanceof AxiosError 도됨*/){//커스텀타입가드
    //{message:'서버 장애입니다 다시 시도 ㄱ'}
   console.error((error.response as AxiosResponse<{message: string}>)?.data.message); 
   
    }
    // (error as AxiosError).response?.data
    console.error((error as AxiosError).response?.data)
  }


})();




//Axios는 class이면서 함수이면서 객체이다 

//AxiosStatic 를 살펴보면 객체가 함수를 상속받았다 

// export class Axios {
//   constructor(config?: AxiosRequestConfig);
//   defaults: AxiosDefaults;
//   interceptors: {
//     request: AxiosInterceptorManager<AxiosRequestConfig>;
//     response: AxiosInterceptorManager<AxiosResponse>;
//   };
//   getUri(config?: AxiosRequestConfig): string;
//   request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>;
//   get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
//   delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
//   head<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
//   options<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
//   post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
//   put<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
//   patch<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
//   postForm<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
//   putForm<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
//   patchForm<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
// }


// export interface AxiosInstance extends Axios {
//   <T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>;
//   <T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;

//   defaults: Omit<AxiosDefaults, 'headers'> & {
//     headers: HeadersDefaults & {
//       [key: string]: AxiosHeaderValue
//     }
//   };
// }

// export interface AxiosStatic extends AxiosInstance {
//   create(config?: CreateAxiosDefaults): AxiosInstance;
//   Cancel: CancelStatic;
//   CancelToken: CancelTokenStatic;
//   Axios: typeof Axios;
//   AxiosError: typeof AxiosError;
//   readonly VERSION: string;
//   isCancel(value: any): value is Cancel;
//   all<T>(values: Array<T | Promise<T>>): Promise<T[]>;
//   spread<T, R>(callback: (...args: T[]) => R): (array: T[]) => R;
//   isAxiosError<T = any, D = any>(payload: any): payload is AxiosError<T, D>;
//   toFormData(sourceObj: object, targetFormData?: GenericFormData, options?: FormSerializerOptions): GenericFormData;
//   formToJSON(form: GenericFormData|GenericHTMLFormElement): object;
// }
