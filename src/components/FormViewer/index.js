import React from 'react';
import { useForm } from 'react-hook-form';

const FormViewer = ({ element }) => {
  const { register } = useForm();
  return (
    <div>
      <label>{element.name.toUpperCase()}</label>
      <input
        type={element.type}
        class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
        {...register(element.name, { required: element.required })}
      ></input>
    </div>
  );
};

export default FormViewer;
