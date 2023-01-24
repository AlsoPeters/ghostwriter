/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Thought` table. All the data in the column will be lost.
  - Added the required column `ghostwriter` to the `Thought` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Thought" DROP COLUMN "createdAt",
ADD COLUMN     "ghostwriter" TEXT NOT NULL;
