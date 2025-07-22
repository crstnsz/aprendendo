from peewee import *
import uuid
import cProfile

# Extra features exemple json 
#from playhouse.postgres_ext import PostgresqlExtDatabase

#psql_db = PostgresqlExtDatabase('my_database', user='postgres')

db = PostgresqlDatabase(
    'test',
    host='localhost',
    port=5432,
    user='postgres',
    password='')

class BaseModel(Model):
    class Meta:
        database = db

class IndexingTasks(BaseModel):
    Id = UUIDField(primary_key=True )
    Status = SmallIntegerField(null=False)
    ErrorCode = SmallIntegerField(null=True)
    Error = TextField(null=True)
    Traceback = TextField(null=True)
    

db.connect()

db.create_tables([IndexingTasks])

def insert_rows() -> None:
    for i in range(10000):
        IndexingTasks.create(Id=uuid.uuid4(), Status=1, ErrorCode=i, Error='Error', Traceback='nothings')

def select_individual_rows() -> None:
    for i in range(10000):
        result = IndexingTasks.select().where(IndexingTasks.ErrorCode == i)
        for d in result:
            print(f"{d.Id} {d.Status} {d.ErrorCode} {d.Error} {d.Traceback}")
        
def select_all_rows() -> None:
    result = IndexingTasks.select()
    for d in result:
        print(f"{d.Id} {d.Status} {d.ErrorCode} {d.Error} {d.Traceback}")

def update_rows_without_pk() -> None:
    for i in range(10000):
        result = IndexingTasks.select().where(IndexingTasks.ErrorCode == i).get()
        result.Status = 3
        result.Error = 'change'
        result.Traceback = 'a lot of data'

        result.save()

def update_rows_without_pk() -> None:
    for i in range(10000):
        result = IndexingTasks.select().where(IndexingTasks.ErrorCode == i).get()
        result.Status = 3
        result.Error = 'change'
        result.Traceback = 'a lot of data'

        result.save()


def delete_even() -> None:
    for i in range(0, 10000, 2):
        result = IndexingTasks.select().where(IndexingTasks.ErrorCode == i).get()
        result.delete_instance()

        result.save()

if __name__ == '__main__':
    cProfile.run('select_all_rows()')