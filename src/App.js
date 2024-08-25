import { useEffect, useState } from 'react';
import axios from 'axios';

import FormBuilder from './components/FormBuilder';
import FormViewer from './components/FormViewer';

import './App.css';

function App() {
  const [formElements, setFormElements] = useState([]);

  const addFormElement = async (element) => {
    const data = [...formElements, element];
    setFormElements(data);

    try {
      await axios.post('http://localhost:3002/forms', { ...element });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getForms = async () => {
      const res = await axios.get('http://localhost:3002/forms');
      const data = await res.data;
      setFormElements(data);
    };

    getForms();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center my-12'>
      <h1 className='text-5xl font-bold'>Create Form</h1>
      <FormBuilder elements={formElements} addFormElement={addFormElement} />
      {formElements && formElements.length > 0 && (
        <FormViewer elements={formElements} />
      )}
    </div>
  );
}

export default App;
