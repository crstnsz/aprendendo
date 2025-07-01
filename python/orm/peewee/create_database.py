from peewee import *

db = PostgresqlDatabase(
    'teste',
    host='localhost',
    port=5432,
    user='postgres',
    password='')

class IndexingTasks(Model):
    Id = UUIDField()
    Status = SmallIntegerField()
    ErrorCode = SmallIntegerField()
    Error = TextField()
    Traceback = TextField()
    
    
    class Meta:
        database = db

db.connect()

#db.create_tables([IndexingTasks])
