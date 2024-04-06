from sqlalchemy import delete
from sqlalchemy.exc import SQLAlchemyError

from ...database.db import engine

from ...models.model_user import Users
from ...models.model_bank import Banks
from ...models.model_credit_card import CreditCards


async def delete_user_db(id_user):
    try:
        async with engine.connect() as conn:
            stmt_user = delete(Users).where(Users.id == id_user)
            stmt_banks = delete(Banks).where(Banks.user_id == id_user)
            stmt_credit_cards = delete(CreditCards).where(CreditCards.user_id == id_user)

            await conn.execute(stmt_user)
            await conn.execute(stmt_banks)
            await conn.execute(stmt_credit_cards)

            await conn.commit()
    except SQLAlchemyError as e:
        print(f"Error deleting user data: {e}")