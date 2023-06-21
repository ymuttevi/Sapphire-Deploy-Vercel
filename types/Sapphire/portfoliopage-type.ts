
import { HeaderResults } from "./header-type";
import { PortfolioResults } from "../Sapphire/portfolio-type";

type Portfoliopage ={

    id:string
    name:string
    header:HeaderResults
    portfolio:PortfolioResults
}
export default  Portfoliopage

export type PortfoliopageResults = {
    total: string;
    results: Portfoliopage[];
  }