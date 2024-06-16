from sqlmodel import (SQLModel, Field, Relationship,Session, Table, Column, Integer, String, MetaData,create_engine,inspect,insert)
from sqlalchemy.engine.reflection import Inspector
from typing import Optional, List
from alembic.operations import Operations
from alembic.migration import MigrationContext
from config.database import engine
from pydantic import BaseModel, AfterValidator
from typing_extensions import Annotated

def type_map(type : str):
	dict_types = {
		'int' : Integer,
		'str' : String,
	}
	type_selected = dict_types.get(type,None)
	if type_selected : return type_selected
	raise TypeError(f'El tipo de dato {type} no existe para crear una columna.')

TypeAttribute = Annotated[str, AfterValidator(lambda type: type_map(type))]

class EntityManager:
	mc = MigrationContext.configure(engine.connect())
	op = Operations(mc)
	dynamicMetadata = MetaData()
	dynamicMetadata.reflect(engine)

	inspector = inspect(engine)
	tables = inspector.get_table_names()

	@staticmethod
	def get_table(tablename : str):
		if tablename in EntityManager.tables:
			return EntityManager.dynamicMetadata.tables[tablename]
		raise ValueError(f'No se encuentra la tabla "{tablename}"')
	
	@staticmethod
	def create_table(**table_attributes):
		return Table(
			''
		)
	
	@staticmethod
	def create_column(**column_attributes):

		return Column(
			col_atributos.nombre,
			col_atributos.tipo,
		)
