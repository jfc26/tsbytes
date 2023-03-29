const matcher = /^\s*(\d+(\.\d+)?)\s*(b|((k|m|g|t)b?))?\s*$/i;
const units: {
    [KEY: string]: number;
} = {
    b: 0, // Byte
    k: 1, // KB
    m: 2, // MB
    g: 3, // GB
    t: 4, // TB
};

/**
 *
 * @param value look like: 12 or 12b; 12kb or 12k; 3.5gb or 3.5g; 10tb or 10t.
 * @param ratio 1KB => Byte. Default: 1024.
 * @returns number of bytes as an float.
 */
export function b(value: string | number, ratio: number = 1024): number {
    if (typeof value === 'number') {
        if (!Number.isInteger(value) || value < 0) {
            throw new Error(`Invalid unit of data must be an nonnegative integer`);
        }
        return value;
    }

    const groups = value.match(matcher);

    if (!groups) {
        throw new Error(`Invalid unit of data: value="${value}"`);
    }

    const dataUnit = (groups[3] || 'b').trim().toLowerCase().charAt(0);
    const num = parseFloat(groups[1].trim());

    if (!isFinite(num)) {
        throw new Error(`Invalid unit of data: value="${value}"`);
    }

    const bytes = num * ratio ** units[dataUnit];
    return bytes;
}

/**
 *
 * @param value look like: 12 or 12b; 12kb or 12k; 3.5gb or 3.5g; 10tb or 10t.
 * @param ratio 1KB => Byte. Default: 1024.
 * @returns number of kilobytes as an float.
 */
export function kb(value: string | number, ratio: number = 1024): number {
    return b(value, ratio) / ratio ** units['k'];
}

/**
 *
 * @param value look like: 12 or 12b; 12kb or 12k; 3.5gb or 3.5g; 10tb or 10t.
 * @param ratio 1KB => Byte. Default: 1024.
 * @returns number of megabytes as an float.
 */
export function mb(value: string | number, ratio: number = 1024): number {
    return b(value, ratio) / ratio ** units['m'];
}

/**
 *
 * @param value look like: 12 or 12b; 12kb or 12k; 3.5gb or 3.5g; 10tb or 10t.
 * @param ratio 1KB => Byte. Default: 1024.
 * @returns number of gigabytes as an float.
 */
export function gb(value: string | number, ratio: number = 1024): number {
    return b(value, ratio) / ratio ** units['g'];
}

/**
 *
 * @param value look like: 12 or 12b; 12kb or 12k; 3.5gb or 3.5g; 10tb or 10t.
 * @param ratio 1KB => Byte. Default: 1024.
 * @returns number of terabytes as an float.
 */
export function tb(value: string | number, ratio: number = 1024): number {
    return b(value, ratio) / ratio ** units['t'];
}
