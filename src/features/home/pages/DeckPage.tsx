import { Button } from "@/components/ui/button";
import type { Word } from "@/shared/models/word.model";
import { WordCard } from "../components/WordCard";
import { Input } from "@/components/ui/input";
import { FilterIcon, SearchIcon } from "lucide-react";
import { TitlePage } from "@/components/molecules/TitlePage";

export const DeckPage = () => {
  const words: Word[] = [
    {
      id: "1",
      name: "example",
      type: "noun",
      definition: "A representative form or pattern.",
      example: "This is an example of a word.",
      partOfSpeech: "noun",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      name: "sample",
      type: "Verb",
      definition:
        "A small part or quantity intended to show what the whole is like.",
      example: "This is a sample of a word.",
      partOfSpeech: "noun",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  return (
    <div className="flex flex-col gap-[40px] mt-[40px]">
      <div className="flex justify-between items-center ">
        <TitlePage name="Deck 1" />
        <div className="flex gap-2">
          <Button variant="secondary">Add word</Button>
          <Button>Study</Button>
        </div>
      </div>
      <div className="flex justify-between items-center justify-end gap-4">
        <div className="flex w-full max-w-sm items-center gap-2">
          <Input type="text" placeholder="Search" />
          <Button
            type="submit"
            variant="outline"
            size="icon"
            className="size-8"
          >
            <SearchIcon />
          </Button>
        </div>
        <Button variant="secondary">
          Filters
          <FilterIcon />
        </Button>
      </div>

      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {words.map((word) => (
            <WordCard key={word.id} word={word} />
          ))}
        </div>
      </div>
    </div>
  );
};
