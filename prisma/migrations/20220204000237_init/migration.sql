/*
  Warnings:

  - You are about to drop the column `profile` on the `Bookmark` table. All the data in the column will be lost.
  - Added the required column `avatar` to the `Bookmark` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Bookmark` DROP COLUMN `profile`,
    ADD COLUMN `avatar` VARCHAR(255) NOT NULL;
