from fastapi import APIRouter, Request
from .bank_data import get_bank_data
from .bank_db import save_bank_db

router_bank = APIRouter()

@router_bank.get("/", tags=["bank"])
async def bank_data() -> dict:
    return await get_bank_data()

@router_bank.post("/save", tags=["bank"])
async def save_bank(request: Request):
    data = await request.json()
    await save_bank_db(data)