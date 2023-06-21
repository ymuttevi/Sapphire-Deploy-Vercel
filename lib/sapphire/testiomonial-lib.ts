import Testimonial, {TestimonialResults} from "../../types/Sapphire/testimonial-type";
import {fetchAPI} from "../Common/api"
import {TESTIMONIAL_QUERY, ALL_TESTIMONIAL_QUERY} from "../../graphQl/sapphire/testimonial-query";




export async function getAllTestimonial(preview: boolean): Promise<Testimonial[]> {
    const data = await fetchAPI(`${ALL_TESTIMONIAL_QUERY}`);
    
    return extractPosts(data.data);
}


function extractPosts({ data }: { data: TestimonialResults }) {
    return data.results.map((post: Testimonial) => {
      return post;
    });
}
