from fastapi import FastAPI,Depends
from fastapi.middleware.cors import CORSMiddleware
from api import api_router
from core.dependencies import Logging
from config import env
import tomllib

def init_cors(app: FastAPI) -> None:
	app.add_middleware(
		CORSMiddleware,
		allow_origins=["*"],
		allow_credentials=True,
		allow_methods=["*"],
		allow_headers=["*"],
	)

def init_routers(app: FastAPI) -> None:
	app.include_router(api_router)

def init_listeners(app: FastAPI) -> None:
	# Exception handler
	...

def init_middleware(app: FastAPI) -> None:
	...

def create_app() -> FastAPI:
	with open("pyproject.toml", "rb") as file:
		data = tomllib.load(file)
		
	app = FastAPI(
		title=data['project']['name'],
		description=data['project']['description'],
		version=data['project']['version'],
		docs_url=None if env.ENV == "production" else "/docs",
		redoc_url=None if env.ENV == "production" else "/redoc",
		dependencies=[Depends(Logging)],
	)
	init_routers(app=app)
	init_cors(app=app)
	init_listeners(app=app)
	init_middleware(app=app)
	return app

# Crear la aplicación FastAPI
app = create_app()