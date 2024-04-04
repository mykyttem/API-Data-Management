from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine


SQLALCHEMY_DATABASE_URL = "sqlite+aiosqlite:///alembic/db.db"

engine = create_async_engine(SQLALCHEMY_DATABASE_URL, echo=True)

async_session = sessionmaker(
    engine, expire_on_commit=False, class_=AsyncSession
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)