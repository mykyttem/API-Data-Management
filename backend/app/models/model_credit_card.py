from sqlalchemy import Column, String, ForeignKey, Integer
from sqlalchemy.orm import relationship

from .model_base import BaseModel


class CreditCards(BaseModel):
    __tablename__ = "credit_cards"  

    credit_card_number = Column(String, unique=True)
    credit_card_expiry_date = Column(String)
    credit_card_type = Column(String)

    user_id = Column(Integer, ForeignKey('users.id'))
    user = relationship("Users", back_populates="credit_cards")