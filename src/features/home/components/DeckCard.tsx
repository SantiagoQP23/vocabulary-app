import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Deck } from "@/shared/models/deck.model";
import { Link } from "@tanstack/react-router";
import { EllipsisVerticalIcon } from "lucide-react";

interface WordCardProps {
  deck: Deck;
}

export const DeckCard = ({ deck }: WordCardProps) => {
  return (
    <Link to={`/decks/$deckId`} params={{ deckId: deck.id }}>
      <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-200 ease-in-out">
        <CardHeader>
          <CardTitle>{deck.name}</CardTitle>
          <CardDescription>{54} words</CardDescription>
          <CardAction>
            <Button variant="secondary" size="icon" className="size-8">
              <EllipsisVerticalIcon />
            </Button>
          </CardAction>
        </CardHeader>
        {/* <CardFooter className="flex justify-between items-center"> */}
        {/* <Button variant="outline">Review</Button> */}
        {/*   <Button variant="secondary" size="icon" className="size-8"> */}
        {/*     <EllipsisVerticalIcon /> */}
        {/*   </Button> */}
        {/* </CardFooter> */}
      </Card>
    </Link>
  );
};
