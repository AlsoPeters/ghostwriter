import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { thoughtsRouter } from "./routers/thoughtsRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  thoughts: thoughtsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
