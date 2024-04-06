from sqlalchemy import Column, Integer, String, ForeignKey
from .model_base import BaseModel


class Banks(BaseModel):
    __tablename__ = "banks"  

    account_number = Column(Integer)
    iban = Column(String)
    bank_name = Column(String)
    routing_number = Column(Integer)
    swift_bic = Column(String)

    user_id = Column(Integer, ForeignKey('users.id'), index=True)