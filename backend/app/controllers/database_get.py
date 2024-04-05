from sqlalchemy import select
from sqlalchemy.exc import SQLAlchemyError

from ..database.db import engine
from ..models import Users, Banks, CreditCards


async def get_data_database():
    try:
        async with engine.connect() as conn:
            stmt = select(Users, Banks, CreditCards).\
                join(Banks, Users.id == Banks.user_id).\
                join(CreditCards, Users.id == CreditCards.user_id)
            result = await conn.execute(stmt)
            data_users = result.fetchall()
            
            # Convert each row to a dictionary
            data_users_dicts = [dict(row._asdict()) for row in data_users]

            # Remove unwanted keys
            for user_dict in data_users_dicts:
                for key in ['type', 'loc', 'msg']:
                    user_dict.pop(key, None)
            
            return {"users": data_users_dicts}
    except SQLAlchemyError as e:
        print(f"Error getting all users: {e}")
        raise