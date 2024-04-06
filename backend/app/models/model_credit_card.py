from sqlalchemy import Column, String, ForeignKey, Integer

from .model_base import BaseModel


class CreditCards(BaseModel):
    __tablename__ = 'credit_cards'

    credit_card_number = Column(String, unique=True)
    credit_card_expiry_date = Column(String)
    credit_card_type = Column(String)

    user_id = Column(Integer, ForeignKey('users.id'), index=True)