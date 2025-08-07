
import { useEffect } from 'react';

const usePageMeta = (title: string, description: string): void => {
  useEffect(() => {
    document.title = `${title} | Giulia Nails`;

    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute('content', description);

  }, [title, description]);
};

export default usePageMeta;