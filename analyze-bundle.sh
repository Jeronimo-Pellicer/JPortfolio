#!/bin/bash
# Build and analyze bundle sizes

echo "🔨 Building project..."
npm run build

echo ""
echo "📊 Bundle Analysis Report"
echo "========================="
echo ""

# Check if dist folder exists
if [ -d "dist/assets" ]; then
  echo "✅ Asset files in dist/assets:"
  ls -lh dist/assets/ | grep -E "\.js$" | awk '{print $9, "-", $5}'
  
  echo ""
  echo "📈 Total bundle size:"
  du -sh dist/
  
  echo ""
  echo "🎯 Chunk breakdown:"
  find dist/assets -name "*.js" -exec sh -c 'echo "$1 ($(du -h "$1" | cut -f1))"' _ {} \;
else
  echo "❌ dist/assets folder not found. Run 'npm run build' first."
fi

echo ""
echo "💡 Tips:"
echo "- Look for separate chunks: gsap, framer-motion, radix-ui, ogl, dnd"
echo "- Main chunk should be <200KB after lazy loading optimization"
echo "- Each lazy component creates a new .js file"
