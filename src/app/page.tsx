"use server";

import Link from "next/link";

export default async function Home() {
  return (
    <main className="h-screen w-screen p-2 md:p-8">
      <div className="h-full flex flex-col border-4 border-white p-4 md:p-8 overflow-auto">
        <section className="md:h-full flex flex-col justify-center items-center space-y-6">
          <div className="md:w-2/3 flex flex-col space-y-6 cursor-default">
            <h1 className="text-2xl font-bold text-center md:text-4xl">
              The Nodestream Foundation
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              The Nodestream Foundation is developing an open-source, non-profit
              platform that uses machine learning and AI to provide accessible,
              accurate future projections. By creating interconnected models
              across various domains, we aim to democratise access to predictive
              models and insights, empowering people and organisations worldwide
              to better understand and navigate the complex changes shaping our
              world.
              <br />
              <br />
              Our solution leverages an innovative nodes-master-based system,
              where each node represents an independent model trained on a
              specific domain. These nodes are interconnected, allowing for the
              exchange of insights and enhancing overall projection accuracy.
              The master node, connected to all existing nodes, is trained to
              automatically detect patterns and generate future projections.
              This modular, collaborative approach enables the platform to grow
              and adapt as new nodes are added, ultimately creating a powerful
              tool for anticipating and preparing for the future.
            </p>

            <p className="text-center text-xl font-bold">•••</p>

            <div className="flex justify-center">
              <blockquote className="text-sm text-center italic text-muted-foreground md:w-2/5">
                &ldquo;If we knew exactly the laws of nature and the situation
                of the universe at the initial moment, we could predict exactly
                the situation of the same universe at a succeeding
                moment.&rdquo; — Henri Poincaré
              </blockquote>
            </div>
          </div>
        </section>

        <footer className="mt-10 md:mt-0">
          <p className="text-sm text-center">
            <Link href="mailto:contact@nodestream.foundation">
              contact@nodestream.foundation
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
