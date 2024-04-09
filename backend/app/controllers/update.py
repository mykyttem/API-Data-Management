from sqlalchemy.exc import SQLAlchemyError

from ...logg import logger

from ..database.db import async_session
from ..models.model_user import Users
from ..models.model_bank import Banks
from ..models.model_credit_card import CreditCards


async def update_data_db(data):
    """
    Updates data in the database.

    Args:
        data (dict): A dictionary containing data to be updated.
            It should have the following keys:
            - 'user': A dictionary representing user data to be updated.
            - 'bank': A dictionary representing bank data to be updated.
            - 'credit_card': A dictionary representing credit card data to be updated.
    """
    try:
        async with async_session() as session:
            async with session.begin():
                # Loading a user from the database by their id
                user = await session.get(Users, data["user"]["id"])

                # Update user values with new data
                for key, value in data["user"].items():
                    setattr(user, key, value)

                # Loading a bank and credit card by user id
                bank = await session.get(Banks, user.id)
                credit_card = await session.get(CreditCards, user.id)

                # Update bank and credit card information
                for key, value in data["bank"].items():
                    setattr(bank, key, value)

                for key, value in data["credit_card"].items():
                    setattr(credit_card, key, value)

                await session.commit()
    except SQLAlchemyError as e:
        logger.error(f"updating data: {e}")
        raise
