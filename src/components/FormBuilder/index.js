import React, { useState } from 'react';
import InputBox from '../InputBox';

const options = ['text', 'checkbox', 'radio', 'select'];

const FormBuilder = ({ addFormElement, elements }) => {
  const [formValues, setFormValues] = useState();

  const updateFormElements = (name, value) => {
    setFormValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    addFormElement(formValues);
  };

  return (
    <div className='w-1/2 flex flex-col gap-8'>
      <div>
        <label
          for='element'
          className='block mb-2 text-sm font-medium text-gray-900'
        >
          Select an option
        </label>
        <select
          onChange={(e) => updateFormElements('type', e.target.value)}
          id='element'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        >
          <option selected>Choose a element</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option.toLocaleUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <div>
        <InputBox
          name={'name'}
          placeholder={'Name'}
          onChange={(e) => updateFormElements('name', e.target.value)}
        />
      </div>

      <div className=' flex flex-col gap-4'>
        <h1 className='text-2xl'>Validations</h1>
        {formValues?.type === 'text' && (
          <>
            <InputBox
              name={'min'}
              placeholder={'Minimum Length'}
              type='number'
              onChange={(e) => updateFormElements('min', e.target.value)}
            />
            <InputBox
              name={'max'}
              placeholder={'Maximum Length'}
              type='number'
              onChange={(e) => updateFormElements('max', e.target.value)}
            />

            <InputBox
              name={'regex'}
              placeholder={'Regex'}
              onChange={(e) => updateFormElements('regex', e.target.value)}
            />
          </>
        )}
        {formValues?.type === 'select' && (
          <div className='flex flex-col gap-2'>
            <InputBox
              name={'options'}
              placeholder={'Options'}
              onChange={(e) => updateFormElements('options', e.target.value)}
            />
            <p className='text-blue-500 text-xs font-bold'>
              Note: write options separated by , only
            </p>
          </div>
        )}
        <div className='flex items-center'>
          <label
            for='required'
            className='mr-2 text-sm font-medium text-gray-900 '
          >
            Is Required ?
          </label>
          <input
            id='required'
            type='checkbox'
            value=''
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'
            onChange={(e) =>
              setFormValues((prev) => {
                return { ...prev, required: e.target.checked };
              })
            }
          />
        </div>
      </div>

      <div className=' flex flex-col gap-4'>
        {elements && elements.length > 0 && (
          <div className='flex items-center'>
            <label
              for='required'
              className='mr-2 text-sm font-medium text-gray-900 '
            >
              Dependent elements
            </label>
            <select
              id='depElement'
              onChange={(e) => updateFormElements('depElement', e.target.value)}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            >
              <option>Choose a Dependent Element</option>
              {elements.map((element, index) => (
                <option key={index} value={element.name}>
                  {element.name.toLocaleUpperCase()}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <button
        type='button'
        onClick={handleSubmit}
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none '
      >
        Submit
      </button>
    </div>
  );
};

export default FormBuilder;
