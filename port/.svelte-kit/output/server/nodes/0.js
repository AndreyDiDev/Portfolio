import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["app/immutable/nodes/0.ug3Zjqoi.js","app/immutable/chunks/scheduler.DGpLaggK.js","app/immutable/chunks/index.-l7ojNbS.js","app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["app/immutable/assets/0.Cg-gUKyV.css"];
export const fonts = [];
