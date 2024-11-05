const path = require("path");
const handlebarsPlugin = require("@11ty/eleventy-plugin-handlebars");
const stylePlugin = require("./@11ty-plugin/eleventy-plugin-scss");
const tscPlugin = require("./@11ty-plugin/eleventy-plugin-tsc");

// @11ty Plugins
const plugins = [
    handlebarsPlugin
];

// @11ty Config
const config = {
    dir: {
        input: "src",
        output: "dist"
    },
    templateFormats: ["hbs"],
    htmlTemplateEngine: "hbs",
    markdownTemplateEngine: "hbs",

    // Custom plugins @see ./sites/eleventy/@11ty-plugin
    stylePlugin: {
        entryPoint: "./src/index.scss",
        outputPoint: "./dist/index.css"
    },
    tscPlugin: {
        entryPoint: "./src/index.ts",
        outputPoint: "./dist"
    }
};

// @11ty Start
module.exports = function (eleventyConfig) {

    // Iterate @11ty Plugins first to provide base directory
    plugins.forEach(plugin => eleventyConfig.addPlugin(plugin));

    // Run Custom Plugins
    eleventyConfig.addPlugin(stylePlugin, config.stylePlugin);
    eleventyConfig.addPlugin(tscPlugin, config.tscPlugin);

    return config;
};
