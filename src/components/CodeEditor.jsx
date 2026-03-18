import { useCallback, useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";

const DEBOUNCE_MS = 500;

function isHTML(value) {
    return typeof value === "string" && /<[a-z][\s\S]*>/i.test(value);
}

function Preview({ result, logs, error }) {
    if (error) {
        return <pre className="p-4 text-sm text-red-400 whitespace-pre-wrap">{error}</pre>;
    }

    const htmlResult = isHTML(result);

    return (
        <div className="flex flex-col h-full">
            {htmlResult ? (
                <iframe
                    className="w-full flex-1"
                    srcDoc={`<html><body style="margin:8px;font-family:sans-serif;">${result}</body></html>`}
                    sandbox="allow-scripts"
                    title="preview"
                />
            ) : (
                <div className="p-4 font-mono text-sm flex-1 overflow-auto">
                    {logs.map((log, i) => (
                        <div key={i} className="text-gray-600">{log}</div>
                    ))}
                    {result !== null && (
                        <div className="text-green-700">
                            {typeof result === "object"
                                ? JSON.stringify(result, null, 2)
                                : String(result)}
                        </div>
                    )}
                </div>
            )}
            {htmlResult && logs.length > 0 && (
                <div className="border-t border-gray-700 p-4 font-mono text-sm overflow-auto max-h-32">
                    {logs.map((log, i) => (
                        <div key={i} className="text-gray-600">{log}</div>
                    ))}
                </div>
            )}
        </div>
    );
}

function CodeEditor({ code, filename = "Example.js" }) {
    const [editorCode, setEditorCode] = useState(code);
    const [result, setResult] = useState(null);
    const [logs, setLogs] = useState([]);
    const [error, setError] = useState(null);
    const workerRef = useRef(null);
    const debounceRef = useRef(null);

    const runCode = useCallback((codeToRun) => {
        if (workerRef.current) workerRef.current.terminate();

        workerRef.current = new Worker(
            new URL("../workers/codeRunner.js", import.meta.url)
        );

        workerRef.current.onmessage = (e) => {
            setResult(e.data.result);
            setLogs(e.data.logs);
            setError(e.data.error);
        };

        workerRef.current.postMessage({ code: codeToRun });
    }, []);

    useEffect(() => {
        runCode(editorCode);
        return () => {
            if (workerRef.current) workerRef.current.terminate();
            clearTimeout(debounceRef.current);
        };
    }, []);

    const handleChange = (value) => {
        setEditorCode(value);
        clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => runCode(value), DEBOUNCE_MS);
    };

    return (
        <div
            className="flex border border-gray-700 rounded overflow-hidden"
            style={{ height: 500 }}
        >
            <div style={{ width: "70%" }} className="flex flex-col">
                <div className="bg-gray-800 text-gray-400 text-xs px-3 py-1 border-b border-gray-700 shrink-0">
                    {filename}
                </div>
                <Editor
                    height="100%"
                    defaultLanguage="javascript"
                    theme="vs-dark"
                    value={editorCode}
                    onChange={handleChange}
                    options={{
                        lineNumbers: "on",
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        wordWrap: "on",
                        fontSize: 13,
                    }}
                />
            </div>
            <div
                className="flex flex-col bg-white border-l border-gray-700"
                style={{ width: "30%" }}
            >
                <div className="bg-gray-800 text-gray-400 text-xs px-3 py-1 border-b border-gray-300 shrink-0">
                    Preview
                </div>
                <div className="flex-1 overflow-auto">
                    <Preview result={result} logs={logs} error={error} />
                </div>
            </div>
        </div>
    );
}

export default CodeEditor;
