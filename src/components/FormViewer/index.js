import React from 'react';
import { useForm } from 'react-hook-form';

const FormViewer = ({ elements }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {elements.map((element, index) => {
        return (
          <div key={index}>
            <div className='flex gap-3 justify-center items-center'>
              <label>{element.name.toUpperCase()}</label>
              <input
                type={element.type}
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 '
                {...register(element.name, {
                  required: element.required,
                  max: element?.max,
                  min: element?.min,
                  pattern: element?.regex,
                })}
              ></input>
            </div>
            {errors[element.name] && (
              <p className='text-red-500'>Something is wrong here</p>
            )}
          </div>
        );
      })}
      <input type='submit' />
    </form>
  );
};

export default FormViewer;
