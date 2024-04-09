from sqlalchemy.exc import SQLAlchemyError

from ..database.db import async_session
from ..models.model_user import Users
from ..models.model_bank import Banks
from ..models.model_credit_card import CreditCards


async def save_data_db(data):
    """
    Saves data to the database.

    Args:
        data (dict): A dictionary containing data to be saved.
            It should have the following keys:
            - 'user': A dictionary representing user data.
            - 'bank': A dictionary representing bank data.
            - 'credit_card': A dictionary representing credit card data.
    """
    try:
        async with async_session() as session:
            async with session.begin():
                # Creating objects using dictionary unpacking
                user = Users(**data["user"])
                bank = Banks(**data["bank"])
                credit_card = CreditCards(**data["credit_card"])

                # Adding the user and committing
                session.add(user)

                # Getting the user ID after saving
                await session.flush()
                user_id = user.id

                # Filling in the field
                bank.user_id = user_id
                credit_card.user_id = user_id

                # Adding a bank and credit card to the session and committing
                session.add(bank)
                session.add(credit_card)
                await session.commit()
    except SQLAlchemyError as e:
        print(f"Error saving data: {e}")
        raise
