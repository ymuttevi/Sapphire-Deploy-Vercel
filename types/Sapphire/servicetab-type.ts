import { MediaResults } from "../Common/media-type"

type ServiceTab =
{

id:string
name:string
description:string
image:MediaResults

}
export default ServiceTab

export type ServiceTabResults ={
total:string;
results:ServiceTab[];

}