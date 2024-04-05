from fastapi import APIRouter, Request, HTTPException

from ..controllers.database_save import save_data_db
from ..controllers.database_get import get_data_database


router_database = APIRouter()


@router_database.post("/", tags=["database"])
async def post_db_save_data(request: Request):
    data = await request.json()  
    return await save_data_db(data)  

@router_database.get("/get", tags=["database"])
async def get_database() -> dict:
    try:
        users = await get_data_database()
        return users
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))