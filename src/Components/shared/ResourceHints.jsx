import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ResourceHints - Prefetch resources based on current route
 * Reduces network dependency chains by preloading likely next resources
 */
export default function ResourceHints() {
  const location = useLocation();

  useEffect(() => {
    // Only prefetch on homepage
    if (location.pathname === '/') {
      // Preconnect to Supabase asset CDN (logos/images)
      const linkSupabase = document.createElement('link');
      linkSupabase.rel = 'preconnect';
      linkSupabase.href = 'https://qtrypzzcjebvfcihiynt.supabase.co';
      linkSupabase.crossOrigin = 'anonymous';
      document.head.appendChild(linkSupabase);

      // Prefetch likely next pages
      const linkHerramientas = document.createElement('link');
      linkHerramientas.rel = 'prefetch';
      linkHerramientas.href = '/herramientas';
      linkHerramientas.as = 'document';
      document.head.appendChild(linkHerramientas);

      const linkRecursos = document.createElement('link');
      linkRecursos.rel = 'prefetch';
      linkRecursos.href = '/recursos';
      linkRecursos.as = 'document';
      document.head.appendChild(linkRecursos);

      return () => {
        document.head.removeChild(linkSupabase);
        document.head.removeChild(linkHerramientas);
        document.head.removeChild(linkRecursos);
      };
    }
  }, [location.pathname]);

  return null;
}
