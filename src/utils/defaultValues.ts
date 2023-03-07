export function setDefaultValues(obj: any, defaults: any): object {
    for (const key in defaults) {
        if (obj[key] === undefined) {
            obj[key] = defaults[key];
        }
    }

    return obj;
}

// https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el
