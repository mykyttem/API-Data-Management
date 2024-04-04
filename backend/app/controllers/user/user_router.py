from fastapi import APIRouter, Request

from .user_data import get_user_data
from .user_db import save_user_db  

router_user = APIRouter()

@router_user.get("/", tags=["user"])
async def user_data() -> dict:
    return await get_user_data()

@router_user.post("/save", tags=["user"])
async def save_user(request: Request):
    data = await request.json()
    await save_user_db(data)