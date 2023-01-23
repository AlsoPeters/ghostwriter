import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const thoughtsRouter = createTRPCRouter({
  createThought: publicProcedure
    .input(
      z.object({
        thoughtTitle: z.string(),
        thought: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const newThought = await ctx.prisma.thought.create({
        data: {
          ...input,
        },
      });
      return newThought;
    }),
  getThoughts: publicProcedure.query(async ({ ctx }) => {
    const thoughts = await ctx.prisma.thought.findMany();
    return thoughts;
  }),
});
