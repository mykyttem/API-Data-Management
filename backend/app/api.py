from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers import user_router, credit_card_router, bank_router, database_router


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


# routers
app.include_router(user_router.router_user, prefix="/user")
app.include_router(credit_card_router.router_credit_card, prefix="/credit-card")
app.include_router(bank_router.router_bank, prefix="/bank")
app.include_router(database_router.router_database, prefix="/database")