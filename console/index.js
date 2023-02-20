// run with: npm run console
import * as fs from 'fs';
import config from './config.json' assert {type: "json"};
import { createSVGDocument } from "../build/release.js";
import svg2img from 'svg2img';

function getSourceFile(file) {
    let result = undefined;
    if (fs.existsSync(file)) {
        result = JSON.parse(fs.readFileSync(file, 'utf8'));
    }
    return result;
}

function writeResultFile(size, set, glyphs) {

    let document = createSVGDocument(size, set, glyphs);
    let filename = `${config.dir}/${set}-${size}-${Date.now()}`;

    const resultSVG = `${filename}.svg`;
    const resultPNG = `${filename}.png`;

    // Write SVG file
    fs.writeFile(resultSVG, document, (err) => {
        if (err) {
            console.error(err);
            return
        } else {
            console.log(`SVG File written successfully`);
        }
    })

    // Write PNG file
    svg2img(document, function (error, buffer) {
        //returns a Buffer
        fs.writeFileSync(resultPNG, buffer);
    });

}

function createVariations(v) {
    v.forEach(el => writeResultFile(el.size, el.set, el.glyphs));
}

const variations = getSourceFile(`${config.dir}/${config.variation}.json`);

if (variations != undefined) {
    createVariations(variations);
} else { console.log("No file found!") }

