from sqlmodel import (SQLModel, Field, Relationship, Table, Column, Integer, String, MetaData)
from typing import Optional,List
from pydantic import BaseModel

class ClaseEntidad(SQLModel,table=True):
	id: Optional[int]		= Field(default=None,primary_key=True)
	nombre: str				= Field(default=None)
	nombre_entidad: str		= Field(default=None)
	prefijo: str			= Field(default=None)
	categoria: str			= Field(default=None)
	genero: str				= Field(default=None)

	atributos : List['EntidadAtributo'] = Relationship(back_populates='clase_entidad')

class EntidadAtributo(SQLModel,table=True):
	id: Optional[int]			= Field(default=None,primary_key=True)
	nombre: str					= Field(default=None)
	tipo: str					= Field(default=None)
	grupo: Optional[str]		= Field(default=None)
	descripcion: Optional[str]	= Field(default=None)

	fk_clase_entidad : Optional[int] = Field(default=None, foreign_key='claseentidad.id')
	clase_entidad : ClaseEntidad = Relationship(back_populates='atributos')

# |||||||||||||||||| CLASES ABM ||||||||||||||||||| #

class ClaseEntidadCrear(SQLModel):
	nombre: str				= Field(default=None)
	nombre_entidad: str		= Field(default=None)
	prefijo: str			= Field(default=None)
	categoria: str			= Field(default=None)
	genero: str				= Field(default=None)

	atributos : List['EntidadAtributoCrear']

class EntidadAtributoCrear(SQLModel):
	nombre: str					= Field(default=None)
	tipo: str					= Field(default=None)
	grupo: Optional[str]		= Field(default=None)
	descripcion: Optional[str]	= Field(default=None)