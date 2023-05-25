const { GifGrid } = require('../../src/components/GifGrid');
const { render, screen } = require('@testing-library/react');
const { useFetchGifs } = require('../../src/hooks/useFetchGifs');

// Ejecutar un mock de un custom hook
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'One Punch';

  test('debe de mostrar el loading inicialmente', () => {
    // Ahora el mock debe de implementarse en la prueba inicial
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://someurl/Saitama.jpg',
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://someurl/Goku.jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(gifs.length);
  });
});
