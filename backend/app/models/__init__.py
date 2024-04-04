from sqlalchemy.orm import declarative_base

Base = declarative_base() 

from .model_user import Users
from .model_bank import Banks
from .model_credit_card import CreditCards
from .model_base import BaseModel