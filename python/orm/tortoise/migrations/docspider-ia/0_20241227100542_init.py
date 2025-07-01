from tortoise import BaseDBAsyncClient


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        CREATE TABLE IF NOT EXISTS "dia_indexing_task" (
    "Id" UUID NOT NULL  PRIMARY KEY,
    "Status" SMALLINT NOT NULL,
    "ErrorCode" INT,
    "Error" TEXT,
    "Traceback" TEXT
);
COMMENT ON COLUMN "dia_indexing_task"."Status" IS 'Pending: 1\nRunning: 2\nSuccess: 3\nError: 4';
CREATE TABLE IF NOT EXISTS "dia_indexing_doc" (
    "Id" UUID NOT NULL  PRIMARY KEY,
    "DocumentId" UUID NOT NULL,
    "Task_id" UUID NOT NULL REFERENCES "dia_indexing_task" ("Id") ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS "aerich" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "version" VARCHAR(255) NOT NULL,
    "app" VARCHAR(100) NOT NULL,
    "content" JSONB NOT NULL
);"""


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        """
