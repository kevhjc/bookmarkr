/*
  Warnings:

  - You are about to drop the column `avatar` on the `Bookmark` table. All the data in the column will be lost.
  - Added the required column `image` to the `Bookmark` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Bookmark` DROP COLUMN `avatar`,
    ADD COLUMN `image` VARCHAR(255) NOT NULL,
    MODIFY `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6);
