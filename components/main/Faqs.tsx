import * as Craft from "@/components/craft";

import { ArrowUpRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "Can I cancel my order?",
    answer:
      "You can cancel your order before it has been shipped. Once your order has been shipped, unfortunately, it cannot be canceled. However, you can still return the item for a refund once you receive it, subject to our return policy.",
  },
  {
    question: "Do you offer discounts for bulk orders?",
    answer:
      "Yes, we do offer discounts for bulk orders. Please contact with your requirements, and we will be happy to provide you with a custom quote tailored to your needs.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We understand that sometimes things do not work out as expected. That is why we offer a hassle-free return policy. If you are not satisfied with your purchase, you can return it within 7 days for a full refund or exchange, provided the item is unused and in its original condition.",
  },
  {
    question: "How long will it take for my order to arrive?",
    answer:
      "Delivery times may vary depending on your location and the shipping method chosen. Typically, orders are processed within 2-3 business days and delivered within 6-7 business days thereafter. You can check the estimated delivery time during checkout.",
  },
];

const FAQ = () => {
  return (
    <Craft.Section>
      <Craft.Container>
        <div className="flex flex-col not-prose gap-4">
          <h3 className="text-2xl">Frequently Asked Questions</h3>
          <h4 className="text-xl font-light opacity-70">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our
            customer support team.
          </h4>
          <div className="mt-6 md:mt-12 flex flex-col gap-6">
            {content.map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={item.question}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:w-3/4">
                    {item.answer}
                    {item.link && (
                      <a
                        href={item.link}
                        className="opacity-60 w-full mt-2 hover:opacity-100 transition-all flex items-center"
                      >
                        Learn more <ArrowUpRight className="ml-1" />
                      </a>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default FAQ;