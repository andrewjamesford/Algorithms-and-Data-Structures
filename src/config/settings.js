
const sandPackOptions = {

    visibleFiles: ["Example.js"],
    activeFile: "Example.js",
    initMode: "lazy",
    showLineNumbers: true,
    autorun: true,
    autoReload: true,
    recompileMode: "delayed",
    recompileDelay: 500,
    // id: "sandpack",
    logLevel: "info",
    // bundlerURL: "https://codesandbox.io/sandpack-bundler",
    // bundlerTimeout: 10000,
    // startRoute: "/", // default - "/"
    skipEval: false, // default - false
    // fileResolver: "codesandbox", // "codesandbox" | "local"
    externalResources: [], // default - []
    // classes: {}, // default - {}
    showInlineErrors: true, // default - false
    wrapContent: true, // default - false
    layout: "preview", // "preview" | "tests" | "console";
    editorHeight: 500, // default - 300
    editorWidthPercentage: 70, // default - 50
    resizablePanels: true, // default - false

};


export {
    sandPackOptions
}