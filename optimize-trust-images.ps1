# Simple Image Optimization Script
Write-Host "Converting trust images to WebP..." -ForegroundColor Cyan

# Convert trust1
if (Test-Path "public\trust1.jpg") {
    Write-Host "Converting trust1.jpg to WebP..." -ForegroundColor Yellow
    magick "public\trust1.jpg" -quality 85 "public\trust1.webp"
    magick "public\trust1.jpg" -quality 75 -strip "public\trust1-optimized.jpg"
    Write-Host "Done: trust1.webp and trust1-optimized.jpg" -ForegroundColor Green
}

# Convert trust2
if (Test-Path "public\trust2.jpg") {
    Write-Host "Converting trust2.jpg to WebP..." -ForegroundColor Yellow
    magick "public\trust2.jpg" -quality 85 "public\trust2.webp"
    magick "public\trust2.jpg" -quality 75 -strip "public\trust2-optimized.jpg"
    Write-Host "Done: trust2.webp and trust2-optimized.jpg" -ForegroundColor Green
}

# Convert trust3
if (Test-Path "public\trust3.jpg") {
    Write-Host "Converting trust3.jpg to WebP..." -ForegroundColor Yellow
    magick "public\trust3.jpg" -quality 85 "public\trust3.webp"
    magick "public\trust3.jpg" -quality 75 -strip "public\trust3-optimized.jpg"
    Write-Host "Done: trust3.webp and trust3-optimized.jpg" -ForegroundColor Green
}

Write-Host ""
Write-Host "Optimization complete!" -ForegroundColor Green
Write-Host "Check the public folder for new .webp and -optimized.jpg files" -ForegroundColor Cyan
