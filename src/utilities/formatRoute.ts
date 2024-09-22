export function formatRoute(route: string): string {
    return route.replace(/\s+/g, '').toLowerCase();
}