import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('One Punch');

  const onInputChange = (event) => {
    // console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // setCategories((categories) => [inputValue, ...categories]);
    setInputValue('');
    onNewCategory(inputValue.trim());
  };

  return (
    // <form onSubmit={(event) => onSubmit(event)}>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        //   onChange={(event) => onInputChange(event)}
        onChange={onInputChange}
      />
    </form>
  );
};
