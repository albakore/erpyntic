from fastapi import APIRouter
from .entity import entity_router

router = APIRouter()
router.include_router(entity_router, prefix="/entity")