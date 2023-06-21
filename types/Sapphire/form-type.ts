

type Form = {

id:string
name:string
namelabel:string
emaillabel:string
phonelabel:string
messagetext:string
buttontext:string
}
export default Form

export type FormResults = { 

  total: string;
  results: Form[];

}