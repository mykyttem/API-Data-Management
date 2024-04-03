from fastapi import APIRouter
from .credit_card_data import get_credit_card_data

router_credit_card = APIRouter()

@router_credit_card.get("/", tags=["user"])
async def credit_card_data() -> dict:
    return await get_credit_card_data()