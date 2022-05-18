import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Index from "../views/Index.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Index,
	},
	{
		path: "/tools/jwt",
		name: "JWT",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "JWT" */ "../views/JWT.vue"),
	}, 
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
