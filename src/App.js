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
    <div className='grid grid-cols-2  items-center  gap-8 my-12'>
      <div className='w-full flex flex-col gap-6 justify-center items-center '>
        <FormBuilder elements={formElements} addFormElement={addFormElement} />
      </div>
      <div className='w-full flex flex-col gap-6 justify-center items-center '>
        {formElements && formElements.length > 0 && (
          <FormViewer elements={formElements} />
        )}
      </div>
    </div>
  );
}

export default App;
