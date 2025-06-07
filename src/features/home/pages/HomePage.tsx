import { Button } from "@/components/ui/button";
import type { Deck } from "@/shared/models/deck.model";
import { DeckCard } from "../components/DeckCard";
import { PlusIcon } from "lucide-react";

import NiceModal from "@ebay/nice-modal-react";
import { CreateDeckModal } from "../components/CreateDeckModal";
import { TitlePage } from "@/components/molecules/TitlePage";

export const HomePage = () => {
  const decks: Deck[] = [
    {
      id: "1",
      name: "My First Deck",
      description: "This is my first deck of words.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      name: "My Second Deck",
      description: "This is my second deck of words.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const openCreateDeckModal = () => {
    NiceModal.show(CreateDeckModal);
  };

  return (
    <div>
      <div className="flex justify-between items-center my-[40px]">
        <TitlePage name="My decks" />
        <div className="flex gap-2">
          {/* <Button variant="secondary">Add deck</Button> */}
          <Button onClick={openCreateDeckModal}>
            <PlusIcon />
            Add deck
          </Button>
        </div>
      </div>
      <div className="my-[40px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {decks.map((deck) => (
            <DeckCard key={deck.id} deck={deck} />
          ))}
        </div>
      </div>
    </div>
  );
};
