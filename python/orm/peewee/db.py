from peewee import *
import uuid
import cProfile

# Extra features exemple json 
#from playhouse.postgres_ext import PostgresqlExtDatabase

#psql_db = PostgresqlExtDatabase('my_database', user='postgres')

db = PostgresqlDatabase(
    'docspideria',
    host='localhost',
    port=5432,
    user='postgres',
    password='DS#xIU5tFMH2XA')

class BaseModel(Model):
    class Meta:
        database = db

class IAIndexingTasks(BaseModel):
    Id = UUIDField(primary_key=True )
    Status = SmallIntegerField(null=False)
    ErrorCode = SmallIntegerField(null=True)
    Error = TextField(null=True)
    Traceback = TextField(null=True)
    

db.connect()

db.create_tables([IAIndexingTasks])

def insert_rows() -> None:
    for i in range(10000):
        IAIndexingTasks.create(Id=uuid.uuid4(), Status=1, ErrorCode=i, Error='Error', Traceback='nothings')

def select_individual_rows() -> None:
    for i in range(10000):
        result = IAIndexingTasks.select().where(IAIndexingTasks.ErrorCode == i)
        for d in result:
            print(f"{d.Id} {d.Status} {d.ErrorCode} {d.Error} {d.Traceback}")
        
def select_all_rows() -> None:
    result = IAIndexingTasks.select()
    for d in result:
        print(f"{d.Id} {d.Status} {d.ErrorCode} {d.Error} {d.Traceback}")

def update_rows_without_pk() -> None:
    for i in range(10000):
        result = IAIndexingTasks.select().where(IAIndexingTasks.ErrorCode == i).get()
        result.Status = 3
        result.Error = 'change'
        result.Traceback = 'a lot of data'

        result.save()

def update_rows_without_pk() -> None:
    for i in range(10000):
        result = IAIndexingTasks.select().where(IAIndexingTasks.ErrorCode == i).get()
        result.Status = 3
        result.Error = 'change'
        result.Traceback = 'a lot of data'

        result.save()


def delete_even() -> None:
    for i in range(0, 10000, 2):
        result = IAIndexingTasks.select().where(IAIndexingTasks.ErrorCode == i).get()
        result.delete_instance()

        result.save()

if __name__ == '__main__':
    cProfile.run('select_all_rows()')