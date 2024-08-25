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
    <>
      <h1 className='text-5xl font-bold text-center '>User Form</h1>
      <form
        className='w-1/2 flex flex-col gap-8'
        onSubmit={handleSubmit(onSubmit)}
      >
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
                        required: {
                          value: element.required,
                          message: 'Please fill required field',
                        },
                        maxLength: {
                          value: Number(element?.max),
                          message: `Max length req is ${element?.max}`,
                        },
                        minLength: {
                          value: Number(element?.min),
                          message: `Min length req is ${element?.min}`,
                        },
                        pattern: {},
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
                  <p className='text-red-500 text-center'>
                    {errors?.root?.message || 'Something is wrong'}
                  </p>
                )}
              </div>
            );
          } else return null;
        })}

        <input
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none '
        />
      </form>
    </>
  );
};

export default FormViewer;
