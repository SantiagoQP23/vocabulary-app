import { createRoute } from "@tanstack/react-router";
import { HomePage } from "../pages/HomePage";
import { privateRoute } from "@/app/routes";
import { DeckPage } from "../pages/DeckPage";

export const homeRoute = createRoute({
  getParentRoute: () => privateRoute,
  path: "/home",
  component: HomePage,
});

export const deckRoute = createRoute({
  getParentRoute: () => privateRoute,
  path: "/decks/$deckId",
  component: DeckPage,
});
