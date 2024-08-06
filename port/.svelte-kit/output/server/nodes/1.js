

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["app/immutable/nodes/1.CbIWYdAT.js","app/immutable/chunks/scheduler.DGpLaggK.js","app/immutable/chunks/index.-l7ojNbS.js","app/immutable/chunks/entry.6z2ZfJwB.js"];
export const stylesheets = [];
export const fonts = [];
