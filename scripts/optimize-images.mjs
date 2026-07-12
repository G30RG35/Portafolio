import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const inputDir = path.join(process.cwd(), 'public', 'imagenes');
const outputDir = path.join(process.cwd(), 'public', 'images', 'projects');

async function optimizeImages() {
  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });
    console.log(`Creada carpeta: ${outputDir}`);

    const files = await fs.readdir(inputDir);
    const imageFiles = files.filter(file => /\.(jpe?g|png|gif|webp)$/i.test(file));
    
    if (imageFiles.length === 0) {
      console.log('No se encontraron imágenes para optimizar.');
      return;
    }

    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      
      // Mapear los nombres de los archivos principales a las claves del proyecto
      let outputFilename = file.toLowerCase().replace('.jpeg', '.webp').replace('.jpg', '.webp');
      
      // Ajustar nombres base para que coincidan con los 'previewFeature' configurados
      if (file === 'evoluciona1.jpeg') outputFilename = 'evoluciona.webp';
      else if (file === 'nativa1.jpeg') outputFilename = 'nativa.webp';
      else if (file === 'piedra pinos.jpeg') outputFilename = 'piedrapinos.webp';
      // Mantener los demás optimizados con el mismo nombre pero en webp
      else outputFilename = outputFilename.replace(/\s+/g, '-');

      const outputPath = path.join(outputDir, outputFilename);

      console.log(`Optimizando: ${file} -> ${outputFilename}`);
      
      // Redimensionar si es muy grande y convertir a WebP
      await sharp(inputPath)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 }) // Alta compresión y calidad
        .toFile(outputPath);
    }
    
    console.log('¡Todas las imágenes han sido optimizadas exitosamente a WebP!');
    
  } catch (error) {
    console.error('Error optimizando imágenes:', error);
  }
}

optimizeImages();
