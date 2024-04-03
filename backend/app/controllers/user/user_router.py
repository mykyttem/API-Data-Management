from fastapi import APIRouter
from .user_data import get_user_data

router_user = APIRouter()

@router_user.get("/", tags=["user"])
async def user_data() -> dict:
    return await get_user_data()