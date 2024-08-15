
export default function () {

    function hashString(string) {
        let hash = 0;
        for (let i = 0; i < string.length; i++) {
            hash = (hash << 5) - hash + string.charCodeAt(i);
            hash |= 0;
        }
        return hash;
    }

    // Example usage
    let string = 'Hello, World!';
    let hash = hashString(string);
    return `The hash of "${string}" is ${hash}.`;


}