import path from 'path'
import fs from 'fs'
import { glob } from 'glob'
import { src, dest, watch, series } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

import terser from 'gulp-terser'
import sharp from 'sharp'

export function js() {
    return src('src/js/script.js')
        .pipe(terser())
        .pipe( dest('build/js') ) 
}

export function css() {
    return src('src/scss/app.scss', {sourcemaps: true})
        .pipe( sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError) )
        .pipe( dest('build/css', {sourcemaps: '.'}) )
}

export async function crop() {
    const inputFolder = 'src/img/gallery/full'
    const outputFolder = 'src/img/gallery/thumb';
    const width = 250;
    const height = 180;
    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder, { recursive: true })
    }
    const images = fs.readdirSync(inputFolder).filter(file => {
        return /\.(jpg)$/i.test(path.extname(file));
    });
    try {
        await Promise.all(images.map(file => {
            const inputFile = path.join(inputFolder, file)
            const outputFile = path.join(outputFolder, file)
            return sharp(inputFile) 
                .resize(width, height, {
                    position: 'centre'
                })
                .toFile(outputFile)
        }));
    } catch (error) {
        console.log(error)
    }
}

export async function imagenes() {
    const srcDir = './src/img';
    const buildDir = './build/img';
    const images =  await glob('./src/img/**/*{jpg,png}')

    await Promise.all(images.map(file => procesarImagenes(file, srcDir, buildDir)));
}

async function procesarImagenes(file, srcDir, buildDir) {
    const relativePath = path.relative(srcDir, path.dirname(file));
    const outputSubDir = path.join(buildDir, relativePath);
    
    if (!fs.existsSync(outputSubDir)) {
        fs.mkdirSync(outputSubDir, { recursive: true })
    }
    const baseName = path.basename(file, path.extname(file))
    const extName = path.extname(file)
    const outputFile = path.join(outputSubDir, `${baseName}${extName}`)
    const outputFileWebp = path.join(outputSubDir, `${baseName}.webp`)
    const outputFileAvif = path.join(outputSubDir, `${baseName}.avif`)

    const options = { quality: 80 }
    await Promise.all([
        sharp(file).jpeg(options).toFile(outputFile),
        sharp(file).webp(options).toFile(outputFileWebp),
        sharp(file).avif().toFile(outputFileAvif)
    ])
}

export function dev() {
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', js)
    watch('src/img/**/*.{png,jpg}', imagenes)
}

export default series( crop, js, css, imagenes, dev )