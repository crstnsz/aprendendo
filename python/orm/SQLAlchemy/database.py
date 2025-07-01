from sqlalchemy import Column, String, Integer, Text, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, Mapped, mapped_column, Session

Base = declarative_base()

target_metadata = Base.metadata

class IAIndexingTasks3(Base):   
    __tablename__ = 'dia_indexing_tasks3'

    Id = Column(String, primary_key=True)  # Use String para representar UUID
    Status = Column(Integer, nullable=False)
    ErrorCode = Column(Integer, nullable=True)
    Error = Column(Text, nullable=True)
    Traceback = Column(Text, nullable=True)
    Docs: Mapped[list["dia_indexing_doc"]] = relationship(
        "dia_indexing_doc",
        back_populates="IAIndexingTasks3",
        cascade="all, delete",
    )

class dia_indexing_doc(Base):
    __tablename__ = 'dia_indexing_docs3'

    Id = Column(String, primary_key=True)
    DocumentId = Column(String, primary_key=True)
    TaskId: Mapped[int] = mapped_column(
        String,
        ForeignKey("dia_indexing_tasks3.Id"),
    )
    Task = relationship('IAIndexingTasks3', back_populates="dia_indexing_doc")