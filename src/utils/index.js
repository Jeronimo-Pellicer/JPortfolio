const pageRoutes = {
  Home: '/herramientas',
  ROICalculator: '/herramientas/calculadora-roi',
  BuyerPersona: '/herramientas/buyer-persona',
  PriorityMatrix: '/herramientas/matriz-priorizacion',
  StrategyQuiz: '/herramientas/quiz-estrategia',
};

export function createPageUrl(pageName) {
  return pageRoutes[pageName] || '/herramientas';
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value) {
  return new Intl.NumberFormat('es-MX').format(value);
}

export function formatPercentage(value) {
  return `${value.toFixed(2)}%`;
}
