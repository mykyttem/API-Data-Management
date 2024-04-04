from fastapi import APIRouter, Request
from .credit_card_data import get_credit_card_data
from .credit_card_db import save_credit_card_db

router_credit_card = APIRouter()

@router_credit_card.get("/", tags=["credit-card"])
async def credit_card_data() -> dict:
    return await get_credit_card_data()

@router_credit_card.post("/save", tags=["credit-card"])
async def save_credit_card(request: Request):
    data = await request.json()
    return await save_credit_card_db(data)