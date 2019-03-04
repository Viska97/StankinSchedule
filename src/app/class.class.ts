export interface Class {
    id: number;
    name: string;
  }

  export interface SubClass {
    id: number;
    name: string;
}
  
export interface IClassResponse {
    success : boolean;
    total: number;
    results: Class[];
}