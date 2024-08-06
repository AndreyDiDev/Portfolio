export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "andreydidev.github.io/app",
	assets: new Set(["assets/particles.json","favicon.png","images/profile.png","images/profile1.png","images/profile3.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png"},
	_: {
		client: {"start":"app/immutable/entry/start.D9-0BR4k.js","app":"app/immutable/entry/app.BCgrPQb_.js","imports":["app/immutable/entry/start.D9-0BR4k.js","app/immutable/chunks/entry.6z2ZfJwB.js","app/immutable/chunks/scheduler.DGpLaggK.js","app/immutable/entry/app.BCgrPQb_.js","app/immutable/chunks/scheduler.DGpLaggK.js","app/immutable/chunks/index.-l7ojNbS.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
