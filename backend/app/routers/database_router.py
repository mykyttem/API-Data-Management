from fastapi import APIRouter, Request, HTTPException

from ..controllers.get import get_data_database
from ..controllers.save import save_data_db
from ..controllers.delete import delete_user_db
from ..controllers.update import update_data_db


router_database = APIRouter()


@router_database.post("", tags=["database"])
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


@router_database.post("/delete-user", tags=["database"])
async def delete_user_database(request: Request):
    try:
        id_user = await request.json()
        return await delete_user_db(id_user)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router_database.post("/update-user", tags=["database"])
async def update_database(request: Request):
    try:
        data = await request.json()
        return await update_data_db(data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
