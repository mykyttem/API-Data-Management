from fastapi import APIRouter
from ..controllers.parsing_requests.random_bank import bank


router_bank = APIRouter()

@router_bank.get("/", tags=["bank"])
async def bank_data() -> dict:
    return bank()