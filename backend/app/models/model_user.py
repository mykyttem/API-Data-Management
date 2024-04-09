from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from .model_base import BaseModel


class Users(BaseModel):
    __tablename__ = "users"

    first_name = Column(String)
    last_name = Column(String)
    username = Column(String, unique=True)
    email = Column(String, unique=True, index=True)
    avatar = Column(String)
    gender = Column(String)
    phone_number = Column(String)
    password = Column(String)
    social_insurance_number = Column(Integer)
    date_of_birth = Column(String)

    credit_cards = relationship(
        "CreditCards",
        backref="users",
        cascade="all, delete-orphan",
    )
    banks = relationship(
        "Banks",
        backref="users",
        cascade="all, delete-orphan",
    )
