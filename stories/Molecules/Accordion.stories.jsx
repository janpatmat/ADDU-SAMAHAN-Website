import { FAQAccordion } from "../../src/components/ComponentIndex"; 
import { eFAQData } from "../../src/data/dataIndex";

export default{
    title:"Molecules/FAQAccordion",
    component:FAQAccordion,
    parameters:{
        backgrounds:{
            default: "ADDU Blue"
        }
    }
}

export const Main = {
    args: {
        data: eFAQData
    },  
  };