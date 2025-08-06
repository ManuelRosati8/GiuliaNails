
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

    // Clean up function is not strictly necessary as the next page's effect will override
  }, [title, description]);
};

export default usePageMeta;