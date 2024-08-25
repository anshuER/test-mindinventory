import './App.css';
import { useState } from 'react';
import FormBuilder from './components/FormBuilder';

function App() {
  const [formElements, setFormElements] = useState([]);

  const addFormElement = (element) => {
    setFormElements((prev) => {
      return [...prev, element];
    });
  };

  return (
    <div className='flex flex-col items-center justify-center my-12'>
      <h1 className='text-5xl font-bold'>Create Form</h1>
      <FormBuilder elements={formElements} addFormElement={addFormElement} />
      {formElements.map((element, index) => {
        return <h1 key={index}>{element.name}</h1>;
      })}
    </div>
  );
}

export default App;
