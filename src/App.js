import './App.css';
import { useState } from 'react';
import FormBuilder from './components/FormBuilder';
import FormViewer from './components/FormViewer';

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
        return <FormViewer key={index} element={element} />;
      })}
    </div>
  );
}

export default App;
