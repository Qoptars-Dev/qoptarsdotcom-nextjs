
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';

function Faq() {
  return (
    <Accordion className='max-w-7xl mx-auto text-gray-800 my-20'>
      <AccordionPanel className='focus:ring-teal-700'>
        <AccordionTitle className='focus:ring-0 focus:bg-gray-100'>Is VAYU an Indian Drone?</AccordionTitle>
        <AccordionContent className='bg-gray-200'>
          <p className="mb-2">
            Yes, VAYU is completely designed and manufactured in India. Our manufacturing facility is in Hyderabad.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle className='focus:ring-0 focus:bg-gray-100'>How to order VAYU?</AccordionTitle>
        <AccordionContent className='bg-gray-200'>
          <p className="mb-2">
          Click on the Book now, Fill up the form and submit. Our representative will call you shortly and assist you with your order.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle className='focus:ring-0 focus:bg-gray-100'>How to get a Demo?</AccordionTitle>
        <AccordionContent className='bg-gray-200'>
          <p className="mb-2">
          Click on the Get a demo, Fill up the form and submit. We provide product demonstrations in different formats, our representative will call you shortly and assist you with the demo.
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
}

export default Faq;  