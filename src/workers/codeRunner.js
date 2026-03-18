self.onmessage = (e) => {
    const { code } = e.data;
    const logs = [];

    const origLog = console.log;
    const origWarn = console.warn;
    const origError = console.error;

    const capture = (...args) =>
        logs.push(
            args
                .map((a) =>
                    typeof a === "object" ? JSON.stringify(a, null, 2) : String(a)
                )
                .join(" ")
        );

    console.log = capture;
    console.warn = capture;
    console.error = capture;

    try {
        const stripped = code.replace(/export\s+default\s+/, "");
        const result = new Function(`return (${stripped})();`)();
        self.postMessage({ result: result !== undefined ? result : null, logs, error: null });
    } catch (err) {
        self.postMessage({ result: null, logs, error: err.message });
    } finally {
        console.log = origLog;
        console.warn = origWarn;
        console.error = origError;
    }
};
