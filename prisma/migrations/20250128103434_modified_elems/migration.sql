/*
  Warnings:

  - Added the required column `title` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "objectifs" TEXT NOT NULL,
    "technologies" JSONB NOT NULL,
    "result" TEXT NOT NULL
);
INSERT INTO "new_Project" ("category", "description", "id", "image", "objectifs", "result", "technologies") SELECT "category", "description", "id", "image", "objectifs", "result", "technologies" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
