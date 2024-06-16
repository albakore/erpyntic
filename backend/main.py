from sqlmodel import (SQLModel, Field, Relationship,Session, Table, Column, Integer, String, MetaData,create_engine,inspect,insert)
from sqlalchemy.engine.reflection import Inspector
from typing import Optional, List
from alembic.operations import Operations
from alembic.migration import MigrationContext
from controllers.EntityManager import EntityManager

print(EntityManager.get_table('custom'))


# with Session(engine) as session:
#     statement= insert(tabla).values(nombre='Kevin',apellido='Kener')
#     data = session.exec(statement)
#     session.commit()
#     print(data)
