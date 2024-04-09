from sqlalchemy.exc import SQLAlchemyError

from ..database.db import async_session

from ..models.model_user import Users
from ..models.model_bank import Banks
from ..models.model_credit_card import CreditCards


async def update_data_db(data):
    try:
        async with async_session() as session:
            async with session.begin():
                #  loading a user from the database by his id
                user = await session.get(Users, data["user"]["id"])
 
                # update user values with new data
                for key, value in data["user"].items():
                    setattr(user, key, value)

                # loading a bank and credit card by user id
  
                bank = await session.get(Banks, user.id)
                credit_card = await session.get(CreditCards, user.id)

                # update bank and credit card information
  
                for key, value in data["bank"].items():
                    setattr(bank, key, value)

                for key, value in data["credit_card"].items():
                    setattr(credit_card, key, value)

                await session.commit()
    except SQLAlchemyError as e:
        print(f"Error update data: {e}")
        raise