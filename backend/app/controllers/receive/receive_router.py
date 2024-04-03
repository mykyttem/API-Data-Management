from fastapi import APIRouter
from .receive_data import data

router_data = APIRouter()


@router_data.get("/", tags=["receive-data"])
async def receive_data() -> dict:
    return await data()