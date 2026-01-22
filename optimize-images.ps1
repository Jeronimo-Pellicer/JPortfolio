# Image optimization script for Windows
# Usage: .\optimize-images.ps1

Write-Host "🖼️  Image Optimization Script" -ForegroundColor Cyan
Write-Host "==============================" -ForegroundColor Cyan
Write-Host ""

# Check if ImageMagick is available
try {
    $magick = Get-Command "magick" -ErrorAction Stop
    Write-Host "✅ ImageMagick found at: $magick" -ForegroundColor Green
} catch {
    Write-Host "❌ ImageMagick not found. Install from: https://imagemagick.org/script/download.php#windows" -ForegroundColor Red
    Write-Host "   Or use: choco install imagemagick" -ForegroundColor Yellow
    exit 1
}

Write-Host "📁 Optimizing images in public/ directory..." -ForegroundColor Yellow
Write-Host ""

# Optimize trust3.jpg
$trust3Path = "public\trust3.jpg"
if (Test-Path $trust3Path) {
    Write-Host "Processing trust3.jpg..." -ForegroundColor Cyan
    
    # Get original size
    $originalSize = (Get-Item $trust3Path).Length / 1MB
    
    # Optimize using ImageMagick
    & magick $trust3Path `
        -quality 75 `
        -strip `
        -interlace Plane `
        -define "jpeg:dct-method=float" `
        "public\trust3-optimized.jpg"
    
    # Get optimized size
    $optimizedSize = (Get-Item "public\trust3-optimized.jpg").Length / 1MB
    $savings = (($originalSize - $optimizedSize) / $originalSize * 100)
    
    Write-Host "✅ trust3.jpg optimized" -ForegroundColor Green
    Write-Host "   Original: $([Math]::Round($originalSize, 2)) MB" -ForegroundColor Gray
    Write-Host "   Optimized: $([Math]::Round($optimizedSize, 2)) MB" -ForegroundColor Green
    Write-Host "   Savings: $([Math]::Round($savings, 1))%" -ForegroundColor Green
    Write-Host ""
}

# Optional: Create WebP version for modern browsers
Write-Host "💡 Creating WebP version for modern browsers..." -ForegroundColor Yellow
if (Test-Path "public\trust3-optimized.jpg") {
    & magick "public\trust3-optimized.jpg" -quality 75 "public\trust3-optimized.webp"
    $webpSize = (Get-Item "public\trust3-optimized.webp").Length / 1MB
    Write-Host "✅ Created trust3-optimized.webp ($([Math]::Round($webpSize, 2)) MB)" -ForegroundColor Green
}

Write-Host ""
Write-Host "✨ Image optimization complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📊 Next steps:" -ForegroundColor Cyan
Write-Host "1. Verify trust3-optimized.jpg in public/ folder" -ForegroundColor Gray
Write-Host "2. Run 'npm run build' to rebuild" -ForegroundColor Gray
Write-Host "3. Test with Lighthouse audit in Chrome DevTools" -ForegroundColor Gray
Write-Host "4. Check Network tab for image sizes" -ForegroundColor Gray
