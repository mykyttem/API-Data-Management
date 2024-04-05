from fastapi import APIRouter
from ..controllers.parsing_requests.random_user import user


router_user = APIRouter()

@router_user.get("/", tags=["user"])
async def user_data() -> dict:
    return user()