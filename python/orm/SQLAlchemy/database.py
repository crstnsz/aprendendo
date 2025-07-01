from sqlalchemy import Column, String, Integer, Text, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, Mapped, mapped_column, Session

Base = declarative_base()

target_metadata = Base.metadata

class IndexingTasks3(Base):   
    __tablename__ = 'dia_indexing_tasks3'

    Id = Column(String, primary_key=True)  # Use String para representar UUID
    Status = Column(Integer, nullable=False)
    ErrorCode = Column(Integer, nullable=True)
    Error = Column(Text, nullable=True)
    Traceback = Column(Text, nullable=True)
    Docs: Mapped[list["dia_indexing_doc"]] = relationship(
        "indexing_doc",
        back_populates="IndexingTasks3",
        cascade="all, delete",
    )

class IndexingRef(Base):
    __tablename__ = 'indexing_ref'

    Id = Column(String, primary_key=True)
    RefId = Column(String, primary_key=True)
    TaskId: Mapped[int] = mapped_column(
        String,
        ForeignKey("indexing_tasks3.Id"),
    )
    Task = relationship('IndexingTasks3', back_populates="indexing_ref")