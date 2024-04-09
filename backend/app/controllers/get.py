from sqlalchemy import select
from sqlalchemy.exc import SQLAlchemyError

from ...logg import logger

from ..database.db import engine
from ..models import Users, Banks, CreditCards


async def get_data_database():
    """
    Retrieves data from the database, including users, associated banks, and credit cards.

    Returns:
        dict: A dictionary containing retrieved data.
            The keys are:
            - 'users': A list of dictionaries representing user data.
    """
    try:
        async with engine.connect() as conn:
            # Constructing a select statement to retrieve users, banks, and credit cards data
            stmt = (
                select(Users, Banks, CreditCards)
                .join(Banks, Users.id == Banks.user_id)
                .join(CreditCards, Users.id == CreditCards.user_id)
            )

            # Executing the select statement
            result = await conn.execute(stmt)
            data_users = result.fetchall()

            # Convert each row to a dictionary
            data_users_dicts = [dict(row._asdict()) for row in data_users]

            # Remove unwanted keys
            for user_dict in data_users_dicts:
                for key in ["type", "loc", "msg"]:
                    user_dict.pop(key, None)

            return {"users": data_users_dicts}
    except SQLAlchemyError as e:
        logger.error(f"getting all users: {e}")
        raise
