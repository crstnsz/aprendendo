from tortoise import Tortoise, run_async
from tortoise.transactions import in_transaction
import uuid
import cProfile
from models import indexing_task, indexing_ref
from database import TORTOISE_ORM


async def run():
  

    async with in_transaction() as connection:

        task_id = uuid.uuid4()

        task =  indexing_task(Id=task_id, Status=1, ErrorCode=1, Error='Error', Traceback='nothings')
        await task.save(using_db=connection)

        doc = dia_indexing_doc(Id=uuid.uuid4(), DocumentId=uuid.uuid4(), Task=task)
        await doc.save(using_db=connection)


async def insert_rows() -> None:
    await Tortoise.init(config=TORTOISE_ORM)

    profiler = cProfile.Profile()
    profiler.enable()
     
    async with in_transaction() as connection:

        for i in range(10000):
            task = indexing_task(Id=uuid.uuid4(), Status=1, ErrorCode=i, Error='Error', Traceback='nothings')
            await task.save(using_db=connection)

    profiler.disable()
    profiler.print_stats(sort='cumulative')

    await Tortoise.close_connections()

async def select_individual_rows() -> None:
    await Tortoise.init(config=TORTOISE_ORM)
     
    async with in_transaction() as connection:
        for i in range(10000):
            result = await indexing_task.filter(ErrorCode = i)
            for d in result:
                print(f"{d.Id} {d.Status} {d.ErrorCode} {d.Error} {d.Traceback}")
    
    await Tortoise.close_connections()

async def select_all_rows() -> None:
    await Tortoise.init(config=TORTOISE_ORM)
     
    async with in_transaction() as connection:
        result = await indexing_task.all()
        for d in result:
            print(f"{d.Id} {d.Status} {d.ErrorCode} {d.Error} {d.Traceback}")
    

    await Tortoise.close_connections()
        
async def update_rows_without_pk() -> None:
    await Tortoise.init(config=TORTOISE_ORM)
     
    async with in_transaction() as connection:
        for i in range(10000):
            result = await indexing_task.get(ErrorCode = i)
            result.Status = 3
            result.Error = 'change'
            result.Traceback = 'a lot of data'

            await result.save(using_db=connection)

    await Tortoise.close_connections()


async def delete_even() -> None:
    await Tortoise.init(config=TORTOISE_ORM)
     
    async with in_transaction() as connection:
        for i in range(0, 10000, 2):
            result = await indexing_task.get(ErrorCode = i)
            await result.delete(using_db=connection)

    await Tortoise.close_connections()
    
if __name__ == "__main__":
    run_async(select_all_rows())
    
