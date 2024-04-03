from fastapi import APIRouter
from .bank_data import get_bank_data

router_bank = APIRouter()

@router_bank.get("/", tags=["bank"])
async def bank_data() -> dict:
    return await get_bank_data()