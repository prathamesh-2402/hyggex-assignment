import { faq } from "../lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Item = ( {title , children} : any ) => {

  return (
    <Accordion type="single" collapsible className="w-full border px-6 rounded-lg border-t-[#217EEC] border-l-[#217EEC] border-b-[#082299] border-r-[#082299]">
      <AccordionItem value="item-1">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const Faq = () => {
  return (
    <div className="px-2 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-14 lg:px-8 overflow-x-hidden ">
      <div className="max-w-xl lg:max-w-2xl">
        <div className="max-w-xl mb-10 lg:max-w-2xl md:mb-12">
          <h1 className="max-w-lg mb-6 text-4xl font-bold leading-none tracking-tight sm:text-5xl bg-gradient-to-t from-[#164EC0] to-[#06286E] bg-clip-text text-transparent">
            FAQ
          </h1>
        </div>
        <div className="space-y-4">
          {faq?.map((itm, i ) => (
            <Item key={i} title={itm?.question}>
              {itm?.answer}
            </Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;