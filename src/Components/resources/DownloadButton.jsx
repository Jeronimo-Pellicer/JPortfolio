import React from 'react';
import { Button } from "../ui/button";
import { Download, Lock, ArrowRight } from 'lucide-react';
import { toast } from "sonner";

// URLs de descarga para recursos gratuitos
const FREE_DOWNLOAD_URLS = {
    'cjm-template': 'https://docs.google.com/spreadsheets/d/1example-cjm/export?format=xlsx',
    'foda-kit': 'https://docs.google.com/spreadsheets/d/1example-foda/export?format=xlsx',
    'cjm-guide': '/downloads/customer-journey-guide.pdf',
    'seo-local-guide': '/downloads/seo-local-guide.pdf',
    'linkedin-strategy': '/downloads/linkedin-strategy.pdf',
    'linkedin-post-anatomy': '/downloads/linkedin-anatomy.pdf',
    'cx-optimization-process': '/downloads/cx-optimization.pdf',
    'keyword-research': '/downloads/keyword-research.pdf',
    'landing-page-elements': '/downloads/landing-page-elements.pdf',
};

export default function DownloadButton({ resource, onPurchase, size = "sm", labelFree = "Descargar Gratis", labelPaid = "Obtener" }) {
    const isFree = resource.price === 0;

    const handleDownload = () => {
        const url = FREE_DOWNLOAD_URLS[resource.id];
        
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

    if (isFree) {
        return (
            <Button
                size={size}
                onClick={handleDownload}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg transition-all duration-300"
            >
                <Download className="w-4 h-4 mr-1.5" />
                {labelFree}
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