# Image Conversion Guide - WebP Optimization

## Current Issue
Your images are causing a 34.8 MB download size. We need to convert them to WebP format.

## Images to Convert
- `public/trust1.jpg` → `trust1.webp` & `trust1-optimized.jpg`
- `public/trust2.jpg` → `trust2.webp` & `trust2-optimized.jpg`
- `public/trust3.jpg` → `trust3.webp` & `trust3-optimized.jpg`

## Option 1: Online Converter (Easiest - No Installation)

### Using Squoosh (Google's Tool - Recommended)
1. Go to https://squoosh.app/
2. Drag `public/trust1.jpg` into the browser
3. On the right panel, select "WebP" format
4. Set quality to 85
5. Click "Download" and save as `trust1.webp`
6. Repeat for trust2.jpg and trust3.jpg

### Also Create Optimized JPGs
1. Upload the same files again to Squoosh
2. Keep format as "MozJPEG"
3. Set quality to 75
4. Download and save as `trust1-optimized.jpg`, etc.

### Other Online Tools
- https://tinypng.com/ - Great compression
- https://cloudconvert.com/jpg-to-webp - Batch conversion
- https://www.iloveimg.com/compress-image - Simple interface

## Option 2: Install ImageMagick (For Future Use)

### Windows Installation
1. Download from: https://imagemagick.org/script/download.php#windows
2. Install the "ImageMagick-7.x.x-Q16-HDRI-x64-dll.exe" version
3. During installation, check "Add to PATH"
4. Restart PowerShell
5. Run: `.\optimize-trust-images.ps1`

## Verification After Conversion

After converting, place the files in `public/` folder:
```
public/
  trust1.jpg (original - keep for now)
  trust1.webp (NEW)
  trust1-optimized.jpg (NEW fallback)
  trust2.jpg (original - keep for now)
  trust2.webp (NEW)
  trust2-optimized.jpg (NEW fallback)
  trust3.jpg (original - keep for now)
  trust3.webp (NEW)
  trust3-optimized.jpg (NEW fallback)
```

## Code Already Updated ✅

The code has been updated to use:
1. **WebP** as the primary format (modern browsers)
2. **Optimized JPG** as fallback (older browsers)

The `AboutSection.jsx` now uses `<picture>` elements with proper fallbacks.

## Expected Results

After conversion:
- **Before**: ~34.8 MB total
- **After**: ~5-8 MB total (70-80% reduction)
- **Load time**: 5-10x faster
- **Lighthouse score**: Significant improvement

## Next Steps

1. Convert all 3 images using Squoosh or another tool
2. Save WebP and optimized JPG versions to `public/` folder
3. Test locally: `npm run dev`
4. Verify images load correctly
5. Deploy to production

## Need Help?
If you need assistance with image conversion, you can:
1. Use the automated script (requires ImageMagick)
2. Use online tools (no installation required)
3. Ask me for further guidance
