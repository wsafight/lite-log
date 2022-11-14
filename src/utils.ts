const toString = (val: any): string => {
    return (val && typeof val === 'object') ? JSON.stringify(val) : '' + val;
}

export const liteFormat = (formatString: string, ...args: any[]): string => {
    if (!Array.isArray(args) || args.length === 0) {
        return formatString
    }
    return formatString.replace(/\{(\d+)\}/g, (_, k: number) => toString(args[k]))
}
