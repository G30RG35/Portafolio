import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const inputDir = path.join(process.cwd(), 'public', 'images', 'projects', 'Validador');
const outputDir = path.join(process.cwd(), 'public', 'images', 'projects');

async function optimizeImages() {
  try {
    const files = await fs.readdir(inputDir);
    const imageFiles = files.filter(file => /\.(jpe?g|png|gif|webp)$/i.test(file));
    
    if (imageFiles.length === 0) {
      console.log('No se encontraron imágenes para optimizar en Validador.');
      return;
    }

    let counter = 1;
    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      
      const outputFilename = `validador${counter}.webp`;
      const outputPath = path.join(outputDir, outputFilename);

      console.log(`Optimizando: ${file} -> ${outputFilename}`);
      
      await sharp(inputPath)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);
        
      counter++;
    }
    
    console.log('¡Todas las imágenes del Validador han sido optimizadas exitosamente a WebP!');
    
  } catch (error) {
    console.error('Error optimizando imágenes:', error);
  }
}

optimizeImages();
