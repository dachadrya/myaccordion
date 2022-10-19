//import logo from './logo.svg';
//import './App.css';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

function App() { 
  return (
    <div>
      
      <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>Note 1</AccordionButton>
    </h2>
    <AccordionPanel>Design kit from cms is great but it's accordion component is not working. 
      Accordion component of chara UI is working</AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>Note 2</AccordionButton>
    </h2>
    <AccordionPanel> There are many more component need to make for pretter web application.</AccordionPanel>
  </AccordionItem>
</Accordion> 
        
        
    </div>
  );
}

export default App;
