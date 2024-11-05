const {exec} = require("child_process");
const path = require("path");

module.exports = function (eleventyConfig, options = {}) {

    const {entryPoint, outputPoint} = options;

    function compileTypeScript() {
        exec(`npx tsc --outDir ${outputPoint}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error compiling TypeScript: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`TypeScript compilation error: ${stderr}`);
                return;
            }
            console.log("TypeScript compiled successfully.");
        });
    }

    // Compile TypeScript before Eleventy rebuilds
    eleventyConfig.on("beforeWatch", () => {
        compileTypeScript();
    });

    // Use Eleventy's built-in watch target for the `entryPoint` path
    eleventyConfig.addWatchTarget(path.dirname(entryPoint));

    // Initial TypeScript compilation
    compileTypeScript();
};