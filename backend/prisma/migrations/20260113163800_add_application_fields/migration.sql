/*
  Warnings:

  - Added the required column `dateFirstContact` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateLastUpdate` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `layoffInfo` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vibe` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "dateFirstContact" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dateLastUpdate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "layoffInfo" BOOLEAN NOT NULL,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "vibe" INTEGER NOT NULL;
