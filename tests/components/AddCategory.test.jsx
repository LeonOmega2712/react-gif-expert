import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <Addcategory />', () => {
  const inputValue = 'Saitama';

  test('debe de cambiar el valor de la caja de texto', () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
  });

  test('debe de llamar onNewCategory si el input tiene un valor', () => {
    const onNewCategory = jest.fn();

    // render(<AddCategory onNewCategory={() => {}} />);
    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');

    // necesita del aria-label para identificar el form
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');

    // * valida que la funcion del mismo nombre haya sido ejecutada.
    expect(onNewCategory).toHaveBeenCalled();

    // * validar que la funcion haya sido llamada n veces
    expect(onNewCategory).toHaveBeenCalledTimes(1);

    // * validar que la funcion haya sido llamada recibiendo x parametro
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('no debe de llamar en onNewCategory si el input esta vacio', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: '' } });

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
