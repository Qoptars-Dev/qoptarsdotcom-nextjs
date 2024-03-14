
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';

function Faq() {
  return (
    <Accordion className='py-10 px-4'>
      <AccordionPanel className=''>
        <AccordionTitle>Is VAYU an Indian Drone?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Yes, VAYU is completely designed and manufactured in India. Our manufacturing facility is in Hyderabad.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>How to order VAYU?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Click on the Book now, Fill up the form and submit. Our representative will call you shortly and assist you with your order.
          </p>

        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>How to get a Demo?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Click on the Get a demo, Fill up the form and submit. We provide product demonstrations in different formats, our representative will call you shortly and assist you with the demo.
          </p>

        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
}

export default Faq;  