import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import { MainLayout } from "@/components/templates/MainLayout";
import { deckRoute, homeRoute } from "@/features/home/router/home.router";

const rootRoute = createRootRoute();

export const privateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <MainLayout />,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: function About() {
    return <div className="p-2">Hello from About!</div>;
  },
});

const routeTree = rootRoute.addChildren([
  aboutRoute,
  privateRoute.addChildren([homeRoute, deckRoute]),
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
