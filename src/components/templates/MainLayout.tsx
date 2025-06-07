import { Outlet, Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Button } from "../ui/button";
import { ModeToggle } from "../molecules/mode-toggle";

export const MainLayout = () => {
  return (
    <>
      <div className="flex items-center justify-between py-4  ">
        <div className="flex gap-2">
          <Button variant="link" asChild>
            <Link to="/home" className="[&.active]:font-bold">
              Home
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link to="/about" className="[&.active]:font-bold">
              About
            </Link>
          </Button>
        </div>
        <ModeToggle />
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
};
