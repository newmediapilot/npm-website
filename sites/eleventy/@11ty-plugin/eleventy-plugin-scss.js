const sass = require("sass");
const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig, options = {}) {

    const { entryPoint, outputPoint } = options;

    function compileSass() {
        try {
            const result = sass.renderSync({
                silenceDeprecations: ['legacy-js-api'], // @ref https://sass-lang.com/documentation/breaking-changes/legacy-js-api/#silencing-warnings
                file: entryPoint,
                outFile: outputPoint,
                outputStyle: "expanded"
            });
            fs.writeFileSync(outputPoint, result.css);
        } catch (error) {
            console.error("Error compiling SCSS:", error);
        }
    }

    // Compile SCSS before Eleventy rebuilds
    eleventyConfig.on("beforeWatch", () => {
        compileSass();
    });

    // Use Eleventy's built-in watch target for the `entryPoint` path
    eleventyConfig.addWatchTarget(entryPoint);

    // Initial SCSS compilation
    compileSass();
};