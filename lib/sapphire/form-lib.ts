import Form, {FormResults } from "../../types/Sapphire/form-type";
import {fetchAPI} from "../Common/api"
import {FORM_QUERY,ALL_FORM_QUERY} from "../../graphQl/sapphire/form-query";





export async function getAllForm(preview: boolean): Promise<Form[]> {
    const data = await fetchAPI(`${ALL_FORM_QUERY}`);
    
    return extractPosts(data.data);
}


function extractPosts({ data }: { data: FormResults }) {
    return data.results.map((post: Form) => {
      return post;
    });
}
