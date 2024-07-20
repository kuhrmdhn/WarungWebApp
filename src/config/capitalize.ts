export function capitalizeString(str: string): string {
    return str.replace(/(^|\s)\S/, match => match.toUpperCase());
}