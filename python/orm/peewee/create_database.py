from peewee import *

db = PostgresqlDatabase(
    'docspideria',
    host='localhost',
    port=5432,
    user='postgres',
    password='DS#xIU5tFMH2XA')

class IAIndexingTasks(Model):
    Id = UUIDField()
    Status = SmallIntegerField()
    ErrorCode = SmallIntegerField()
    Error = TextField()
    Traceback = TextField()
    
    
    class Meta:
        database = db

db.connect()

#db.create_tables([IAIndexingTasks])
