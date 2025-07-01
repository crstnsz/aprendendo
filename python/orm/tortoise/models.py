from tortoise import fields
from tortoise.models import Model
from enum import IntEnum

class status_type(IntEnum):
    Pending = 1
    Running = 2
    Success = 3
    Error = 4

class dia_indexing_task(Model):
    Id = fields.UUIDField(primary_key=True )
    Status = fields.IntEnumField(null=False, enum_type=status_type)
    ErrorCode = fields.IntField(null=True)
    Error = fields.TextField(null=True)
    Traceback = fields.TextField(null=True)

class dia_indexing_doc(Model):
    Id = fields.UUIDField(primary_key=True )
    DocumentId = fields.UUIDField()
    Task = fields.ForeignKeyField("docspider-ia.dia_indexing_task")
