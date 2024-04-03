from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .controllers.receive import receive_router

"""
    Main settings app:
        - origins
        - middleware
        - include routers
"""

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"] 
)


app.include_router(receive_router.router_data, prefix="/receive-data")