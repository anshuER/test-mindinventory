import React from 'react';

const InputBox = ({ name, placeholder, type = 'text', onChange }) => {
  return (
    <div>
      <label for='name' class='block mb-2 text-sm font-medium text-gray-900 '>
        {placeholder}
      </label>
      <input
        name={name}
        onChange={onChange}
        type={type}
        class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputBox;
