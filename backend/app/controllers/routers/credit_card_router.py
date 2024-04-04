from fastapi import APIRouter
from parsing_requests.random_credit_card import credit_card


router_credit_card = APIRouter()

@router_credit_card.get("/", tags=["credit-card"])
async def credit_card_data() -> dict:
    return credit_card()