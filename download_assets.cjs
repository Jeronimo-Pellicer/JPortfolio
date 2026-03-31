const fs = require('fs');
const https = require('https');
const path = require('path');

const publicFontsDir = 'c:\\Users\\jerop\\JP-Studio\\public\\fonts';
const publicFlagsDir = 'c:\\Users\\jerop\\JP-Studio\\public\\flags';

if (!fs.existsSync(publicFontsDir)) fs.mkdirSync(publicFontsDir, { recursive: true });
if (!fs.existsSync(publicFlagsDir)) fs.mkdirSync(publicFlagsDir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        if (response.headers.location) {
          download(response.headers.location, dest).then(resolve).catch(reject);
        } else {
          reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        }
      }
    }).on('error', reject);
  });
}

async function doCaveat() {
    const cssUrl = 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap';
    https.get(cssUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36' } }, (res) => { 
        let css = '';
        res.on('data', chunk => css += chunk);
        res.on('end', async () => {
            const urls = [...css.matchAll(/url\((https:\/\/[^)]+)\)/g)].map(m => m[1]);
            const uniqueUrls = [...new Set(urls)];
            let newCss = css;
            let i = 1;
            for (const url of uniqueUrls) {
                const filename = `caveat-${i}.woff2`;
                const dest = path.join(publicFontsDir, filename);
                console.log('Downloading', url, 'to', dest);
                await download(url, dest);
                newCss = newCss.replace(new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), `/fonts/${filename}`);
                i++;
            }
            fs.writeFileSync(path.join(publicFontsDir, 'caveat.css'), newCss);
            console.log('Fonts downloaded and CSS generated!');
        });
    });
}

async function doFlags() {
    await download('https://flagcdn.com/es.svg', path.join(publicFlagsDir, 'es.svg'));
    await download('https://flagcdn.com/us.svg', path.join(publicFlagsDir, 'us.svg'));
    console.log('Flags downloaded!');
}

doCaveat();
doFlags();
