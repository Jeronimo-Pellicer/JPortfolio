# Image Optimization Script - Convert to WebP
# This script converts JPG images to WebP format for better compression

Write-Host "Image Optimization Script" -ForegroundColor Cyan
Write-Host "Converting images to WebP format..." -ForegroundColor Yellow
Write-Host ""

# Check if ImageMagick is installed
$magickPath = Get-Command magick -ErrorAction SilentlyContinue

if (-not $magickPath) {
    Write-Host "ImageMagick not found!" -ForegroundColor Red
    Write-Host "Please install ImageMagick from: https://imagemagick.org/script/download.php" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Or use an online converter like:" -ForegroundColor Yellow
    Write-Host "- https://squoosh.app/ (Google)" -ForegroundColor Cyan
    Write-Host "- https://tinypng.com/" -ForegroundColor Cyan
    Write-Host "- https://cloudconvert.com/jpg-to-webp" -ForegroundColor Cyan
    exit 1
}

Write-Host "ImageMagick found!" -ForegroundColor Green
Write-Host ""

# Function to convert image
function Convert-ToWebP {
    param(
        [string]$InputPath,
        [string]$OutputPath,
        [int]$Quality = 85
    )
    
    if (Test-Path $InputPath) {
        $originalSize = (Get-Item $InputPath).Length / 1MB
        Write-Host "Converting: $InputPath" -ForegroundColor Cyan
        Write-Host "  Original size: $([math]::Round($originalSize, 2)) MB" -ForegroundColor Gray
        
        & magick $InputPath -quality $Quality $OutputPath
        
        if (Test-Path $OutputPath) {
            $newSize = (Get-Item $OutputPath).Length / 1MB
            $savings = (1 - ($newSize / $originalSize)) * 100
            Write-Host "  ✓ WebP size: $([math]::Round($newSize, 2)) MB" -ForegroundColor Green
            Write-Host "  💰 Saved: $([math]::Round($savings, 1))%" -ForegroundColor Green
            Write-Host ""
        }
    }
    else {
        Write-Host "  ⚠️  File not found: $InputPath" -ForegroundColor Yellow
    }
}

# Convert trust images
Write-Host "Converting trust images..." -ForegroundColor Yellow
Write-Host ""

Convert-ToWebP -InputPath "public\trust1.jpg" -OutputPath "public\trust1.webp" -Quality 85
Convert-ToWebP -InputPath "public\trust2.jpg" -OutputPath "public\trust2.webp" -Quality 85
Convert-ToWebP -InputPath "public\trust3.jpg" -OutputPath "public\trust3.webp" -Quality 85

Write-Host "Creating optimized JPG fallbacks..." -ForegroundColor Yellow
Write-Host ""

if (Test-Path "public\trust1.jpg") {
    & magick "public\trust1.jpg" -quality 75 -strip "public\trust1-optimized.jpg"
    Write-Host "Created trust1-optimized.jpg" -ForegroundColor Green
}

if (Test-Path "public\trust2.jpg") {
    & magick "public\trust2.jpg" -quality 75 -strip "public\trust2-optimized.jpg"
    Write-Host "Created trust2-optimized.jpg" -ForegroundColor Green
}

if (Test-Path "public\trust3.jpg") {
    & magick "public\trust3.jpg" -quality 75 -strip "public\trust3-optimized.jpg"
    Write-Host "Created trust3-optimized.jpg" -ForegroundColor Green
}

Write-Host ""
Write-Host "Image optimization complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Summary:" -ForegroundColor Cyan
Write-Host "- WebP images created with 85% quality" -ForegroundColor Gray
Write-Host "- Optimized JPG fallbacks created with 75% quality" -ForegroundColor Gray
Write-Host "- Metadata stripped for smaller file sizes" -ForegroundColor Gray
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Check the public folder for new .webp files" -ForegroundColor Gray
Write-Host "2. Test images in browser" -ForegroundColor Gray
Write-Host "3. Deploy to production" -ForegroundColor Gray
