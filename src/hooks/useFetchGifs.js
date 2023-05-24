import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  // Ejecutar este codigo solamente la primera vez que se renderice el componente
  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
