import React from 'react';
import { useForm } from 'react-hook-form';

const FormViewer = ({ elements }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log('--', watch('state'));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {elements.map((element, index) => {
        if (getValues(element.depElement)) {
          return (
            <div key={index}>
              {element.type !== 'select' ? (
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
              ) : (
                <div className='flex gap-3 items-center justify-center'>
                  <label>{element.name.toUpperCase()}</label>
                  <select
                    type={element.type}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    {...register(element.name, {
                      required: element.required,
                    })}
                  >
                    <option selected value=''>
                      Select Options
                    </option>
                    {element?.options?.split(',').map((name, index) => (
                      <option key={index} value={name}>
                        {name.toLocaleUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {errors[element.name] && (
                <p className='text-red-500'>Something is wrong here</p>
              )}
            </div>
          );
        } else return null;
      })}

      <input type='submit' />
    </form>
  );
};

export default FormViewer;
