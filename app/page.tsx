import Link from "next/link";

import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
        </nav>

        <div className="ml-auto flex h-5 items-center space-x-4">
          <Link href="https://github.com/nodestreamfoundation">
            <Button variant="outline" size="icon">
              <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
            </Button>
          </Link>

          <Separator orientation="vertical" />
          <ModeToggle />
        </div>
      </header>

      <div className="flex flex-col h-full justify-center items-center p-24">
        <h1 className="text-5xl font-black">The Nodestream Foundation</h1>
      </div>
    </main>
  );
}
