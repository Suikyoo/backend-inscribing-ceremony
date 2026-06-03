CREATE TABLE "tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" serial NOT NULL,
	"title" text NOT NULL,
	"metadata_1" text,
	"metadata_2" text
);
--> statement-breakpoint
ALTER TABLE "tags" ADD CONSTRAINT "tags_user_id_data_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."data"("id") ON DELETE no action ON UPDATE no action;