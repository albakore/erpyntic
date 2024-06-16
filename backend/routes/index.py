from fastapi import FastAPI, Depends
from models.EntityCore import ClaseEntidadCrear,ClaseEntidad,EntidadAtributo
from config.database import get_session
from sqlmodel import Session
app = FastAPI()

@app.get('/')
def init():
	return "Hola mundo"


@app.post('/tabla')
def init(
		entidad : ClaseEntidadCrear,
		session : Session = Depends(get_session)
	):
	lista_atributos = [EntidadAtributo.model_validate(atributo) for atributo in entidad.atributos]
	delattr(entidad,'atributos')

	nueva_entidad  = ClaseEntidad.model_validate(entidad)
	nueva_entidad.atributos = lista_atributos
	# for atributo in nueva_entidad.atributos:
	# 	atributo.nombre = f'{nueva_entidad.prefijo}_{atributo.nombre}' 
	session.add(nueva_entidad)
	session.commit()
	session.refresh(nueva_entidad)
	return nueva_entidad
