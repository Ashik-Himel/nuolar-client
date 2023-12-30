import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import {FaAngleDown} from 'react-icons/fa6';
import PropTypes from 'prop-types';

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <FaAngleDown className='chevron ml-auto transition-transform duration-200'  />
      </>
    }
    className='border-b border-gray-300'
    buttonProps={{
      className: ({ isEnter }) =>
        `cursor-pointer text-left flex items-center w-full px-4 py-3 hover:bg-primary hover:bg-opacity-10 ${isEnter && 'itemBtnExpanded bg-primary bg-opacity-10'}`
    }}
    contentProps={{ className: 'transition-[height] duration-200' }}
    panelProps={{ className: 'px-4 py-3' }}
  />
);

export const FAQ = () => {
  return (
    <section className="mt-12 lg:mt-16">
      <div className="container">
        <h2 className="text-center text-2xl font-semibold uppercase mb-4">Frequently Asked Question (<span className="text-primary">FAQ</span>)</h2>

        <Accordion className='border border-b-0 border-gray-300 rounded-lg w-full max-w-[800px] mx-auto' transition transitionTimeout={200}>
          <AccordionItem header="How much is the delivery charge?" initialEntered>
            <p className='mb-px'><span className='font-medium'>Inside Dhaka:</span> 100 taka</p>
            <p><span className='font-medium'>Outside Dhaka:</span> 150 taka</p>
          </AccordionItem>
          <AccordionItem header="Which payment gateways are available?">
            Bkash, Rocket, Nagad, Upay
          </AccordionItem>
          <AccordionItem header="How long do you need to deliver a product?">
            It depends on the delivery service company. Usually it takes 1-3 days.
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

AccordionItem.propTypes = {
  header: PropTypes.string
}