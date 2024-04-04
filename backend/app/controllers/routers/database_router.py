from fastapi import APIRouter, Request

from ..database_save import save_data_db


router_database = APIRouter()


@router_database.post("/", tags=["database"])
async def post_db_save_data(request: Request):
    data = await request.json()  
    return await save_data_db(data)  