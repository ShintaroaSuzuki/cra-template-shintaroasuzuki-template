const fs = require("fs");
const path = require("path");

const inputDir = "server/openapi";
const outputDir = "src/apis";

const files = fs.readdirSync(inputDir)
  .filter((file) => path.extname(file).toLowerCase() === '.yaml')
  .map(file => file.replace('.yaml', ''))

const target = files.map((v) => ({
    input: `${outputDir}/bin/${v}`,
    outputEachDir: true,
    openapi: {
        inputFile: `${inputDir}/${v}.yml`,
    },
}));

module.exports = [...target];
