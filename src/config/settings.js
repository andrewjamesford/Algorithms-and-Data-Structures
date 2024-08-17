/**
 * Sandpack Configuration Options
 * 
 * This file contains the configuration settings for Sandpack.
 */

const sandPackOptions = {
    visibleFiles: ["Example.js"],
    activeFile: "Example.js",
    initMode: "lazy", // Load Sandpack lazily
    showLineNumbers: true, // Show line numbers in the editor
    autorun: true, // Automatically run the code
    autoReload: true, // Automatically reload the code on changes
    recompileMode: "delayed", // Delay recompilation
    recompileDelay: 500, // Delay in milliseconds for recompilation
    logLevel: "info", // Logging level
    skipEval: false, // Do not skip evaluation
    externalResources: [], // List of external resources
    showInlineErrors: true, // Show inline errors in the editor
    wrapContent: true, // Wrap content in the editor
    layout: "preview", // Layout mode: "preview" | "tests" | "console"
    editorHeight: 500, // Height of the editor in pixels
    editorWidthPercentage: 70, // Width of the editor as a percentage
    resizablePanels: true, // Allow resizing of panels
};

function wrapInFunction(code) {
    return `function example() {\n${code}\n}`;
}

const sandPackProps = {
    template: "node", // Template type
    theme: "dark", // Theme for the editor
    autoRun: true, // Automatically run the code
    options: sandPackOptions, // Sandpack options
    showNavigation: true, // Show navigation bar
};

export {
    sandPackProps,
    sandPackOptions,
    wrapInFunction
};