from sqlalchemy import Column, Integer, String

from . import Base


class BaseModel(Base):
    __abstract__ = True

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    uid = Column(String)
