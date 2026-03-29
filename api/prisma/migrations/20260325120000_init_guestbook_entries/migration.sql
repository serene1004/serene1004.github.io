CREATE TABLE "guestbook_entries" (
  "id" SERIAL NOT NULL,
  "author" VARCHAR(40) NOT NULL,
  "message" VARCHAR(500) NOT NULL,
  "is_visible" BOOLEAN NOT NULL DEFAULT true,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "guestbook_entries_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "guestbook_entries_created_at_idx" ON "guestbook_entries"("created_at");
