type Promo =
{

id:string
name:string
promotitle:string
promodescription:string
promobuttontext:string

}
export default Promo

export type PromoResults ={
total:string;
results:Promo[];

}