CREATE TABLE "data" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"img" text
);
--> statement-breakpoint
ALTER TABLE "students" DROP COLUMN "visible";