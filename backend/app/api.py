from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .controllers.user import user_router
from .controllers.credit_card import credit_card_router
from .controllers.bank import bank_router

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


app.include_router(user_router.router_user, prefix="/user")
app.include_router(credit_card_router.router_credit_card, prefix="/credit-card")
app.include_router(bank_router.router_bank, prefix="/bank")