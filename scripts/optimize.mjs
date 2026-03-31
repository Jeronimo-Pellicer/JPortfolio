import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const TARGET_FOLDERS = ['topper', 'kiddo', 'licki', 'easytrack', 'stiberman'];
const MAX_WIDTH = 1920;
const QUALITY = 85;

let totalInitialSize = 0;
let totalFinalSize = 0;

async function processDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            await processDirectory(fullPath);
        } else if (stat.isFile() && (fullPath.endsWith('.jpg') || fullPath.endsWith('.png') || fullPath.endsWith('.jpeg') || fullPath.endsWith('.JPG'))) {
            totalInitialSize += stat.size;
            
            // Generate webp filename
            const parsed = path.parse(fullPath);
            const webpPath = path.join(parsed.dir, `${parsed.name}.webp`);

            try {
                // Process image
                await sharp(fullPath)
                    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
                    .webp({ quality: QUALITY })
                    .toFile(webpPath);
                
                const newStat = fs.statSync(webpPath);
                totalFinalSize += newStat.size;

                // Delete original
                fs.unlinkSync(fullPath);
                console.log(`✅ Converted & Deleted: ${parsed.base} -> ${parsed.name}.webp`);
            } catch (err) {
                console.error(`❌ Error processing ${fullPath}:`, err.message);
            }
        }
    }
}

async function main() {
    console.log('Starting massive image optimization (WebP conversion)...');
    
    for (const folder of TARGET_FOLDERS) {
        const folderPath = path.join(PUBLIC_DIR, folder);
        if (fs.existsSync(folderPath)) {
            console.log(`\nProcessing folder: /public/${folder}...`);
            await processDirectory(folderPath);
        }
    }

    const savedMB = ((totalInitialSize - totalFinalSize) / (1024 * 1024)).toFixed(2);
    console.log('\n=====================================');
    console.log('🎉 Optimization Complete!');
    console.log(`Total Initial Size: ${(totalInitialSize / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`Total Final Size:   ${(totalFinalSize / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`Total Space Saved:  ${savedMB} MB 🚀`);
    console.log('=====================================\n');
}

main();
