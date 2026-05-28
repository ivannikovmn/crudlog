/*
  Warnings:

  - You are about to drop the column `amount` on the `WorkLog` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `WorkLog` table. All the data in the column will be lost.
  - Added the required column `performer` to the `WorkLog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `WorkLog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `volume` to the `WorkLog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workType` to the `WorkLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `WorkLog` DROP COLUMN `amount`,
    DROP COLUMN `category`,
    ADD COLUMN `performer` VARCHAR(191) NOT NULL,
    ADD COLUMN `unit` VARCHAR(191) NOT NULL,
    ADD COLUMN `volume` DOUBLE NOT NULL,
    ADD COLUMN `workType` VARCHAR(191) NOT NULL;
