export const ucwords = (str: string) => {
    return str.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}

export const capitalize = (str: string) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}