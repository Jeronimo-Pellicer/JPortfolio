#!/bin/bash
# Image optimization script for portfolio
# Usage: bash optimize-images.sh

echo "🖼️  Image Optimization Script"
echo "=============================="
echo ""

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found. Install with:"
    echo "   - Windows: choco install imagemagick"
    echo "   - macOS: brew install imagemagick"
    echo "   - Linux: apt-get install imagemagick"
    exit 1
fi

echo "📁 Optimizing images in public/ directory..."
echo ""

# Optimize trust3.jpg
if [ -f "public/trust3.jpg" ]; then
    echo "Optimizing trust3.jpg..."
    convert public/trust3.jpg \
        -quality 75 \
        -strip \
        -interlace Plane \
        -define jpeg:dct-method=float \
        public/trust3-optimized.jpg
    
    ORIGINAL_SIZE=$(du -h public/trust3.jpg | awk '{print $1}')
    OPTIMIZED_SIZE=$(du -h public/trust3-optimized.jpg | awk '{print $1}')
    
    echo "✅ trust3.jpg optimized"
    echo "   Original: $ORIGINAL_SIZE"
    echo "   Optimized: $OPTIMIZED_SIZE"
    echo ""
fi

# Optional: Create WebP versions for modern browsers
echo "💡 Optional: Creating WebP versions for better compression..."
if [ -f "public/trust3-optimized.jpg" ]; then
    convert public/trust3-optimized.jpg -quality 75 public/trust3-optimized.webp
    echo "✅ Created trust3-optimized.webp"
fi

echo ""
echo "✨ Image optimization complete!"
echo ""
echo "📊 Next steps:"
echo "1. Run 'npm run build' to rebuild"
echo "2. Test with Lighthouse audit"
echo "3. Check Network tab for image sizes"
