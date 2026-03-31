import React from 'react';
import { Button } from "../ui/button";
import { Download, Lock, ArrowRight } from 'lucide-react';
import { toast } from "sonner";

// URLs de descarga para todos los recursos
const RESOURCE_DOWNLOAD_URLS = {
    'cjm-template': 'https://docs.google.com/spreadsheets/d/1example-cjm/export?format=xlsx',
    'foda-kit': 'https://docs.google.com/spreadsheets/d/1example-foda/export?format=xlsx',
    'guia-customer-journey-map': '/downloads/customer-journey-guide.pdf',
    'guia-seo-local': '/downloads/seo-local-guide.pdf',
    'guia-estrategia-linkedin': '/downloads/linkedin-strategy.pdf',
    'infografia-anatomia-post-linkedin': '/downloads/linkedin-anatomy.pdf',
    'infografia-optimizacion-atencion-cliente': '/downloads/cx-optimization.pdf',
    'infografia-palabras-clave': '/downloads/keyword-research.pdf',
    'infografia-elementos-landing-page': '/downloads/landing-page-elements.pdf',
    // Recursos pagos (requieren bypass o pago)
    'content-calendar': 'https://docs.google.com/spreadsheets/d/1example-calendar/export?format=xlsx',
    'nps-template': 'https://docs.google.com/spreadsheets/d/1example-nps/export?format=xlsx',
    'content-strategy': 'https://docs.google.com/spreadsheets/d/1example-strategy/export?format=xlsx',
    'cx-metrics-guide': '/downloads/cx-metrics-guide.pdf',
};

export default function DownloadButton({ resource, onPurchase, size = "sm", labelFree = "Descargar Gratis", labelPaid = "Obtener" }) {
    // Check for Admin Bypass (URL param or LocalStorage)
    const isAdmin = typeof window !== 'undefined' && (
        new URLSearchParams(window.location.search).get('preview') === 'admin' ||
        localStorage.getItem('jp_admin') === 'true'
    );

    const isFree = resource.price === 0;
    const isUnlocked = isFree || isAdmin;

    const handleDownload = () => {
        const url = RESOURCE_DOWNLOAD_URLS[resource.id];
        
        if (url) {
            // Simular descarga - en producción esto abriría el archivo real
            toast.success(`Descargando: ${resource.title}`, {
                description: 'Tu archivo se descargará en segundos'
            });
            
            // En producción, esto sería:
            // window.open(url, '_blank');
            
            // Por ahora simulamos la descarga
            const link = document.createElement('a');
            link.href = url;
            link.download = resource.title.replace(/\s+/g, '-').toLowerCase();
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            toast.info('Recurso en preparación', {
                description: 'Este archivo estará disponible pronto'
            });
        }
    };

    const handlePurchase = () => {
        if (onPurchase) {
            onPurchase(resource);
        }
    };

    if (isUnlocked) {
        return (
            <Button
                size={size}
                onClick={handleDownload}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg transition-all duration-300"
            >
                <Download className="w-4 h-4 mr-1.5" />
                {isAdmin && !isFree ? "Descarga Admin" : labelFree}
            </Button>
        );
    }

    return (
        <Button
            size={size}
            onClick={handlePurchase}
            className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg transition-all duration-300 group"
        >
            <Lock className="w-4 h-4 mr-1.5 group-hover:hidden" />
            <ArrowRight className="w-4 h-4 mr-1.5 hidden group-hover:block" />
            {labelPaid} ${resource.price.toFixed(2)}
        </Button>
    );
}