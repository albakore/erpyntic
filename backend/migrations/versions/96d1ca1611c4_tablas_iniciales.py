"""Tablas iniciales

Revision ID: 96d1ca1611c4
Revises: 
Create Date: 2024-06-16 02:12:27.910576

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
import sqlmodel


# revision identifiers, used by Alembic.
revision: str = '96d1ca1611c4'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('claseentidad',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sqlmodel.sql.sqltypes.AutoString(), nullable=False),
    sa.Column('nombre_entidad', sqlmodel.sql.sqltypes.AutoString(), nullable=False),
    sa.Column('prefijo', sqlmodel.sql.sqltypes.AutoString(), nullable=False),
    sa.Column('categoria', sqlmodel.sql.sqltypes.AutoString(), nullable=False),
    sa.Column('genero', sqlmodel.sql.sqltypes.AutoString(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('entidadatributo',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sqlmodel.sql.sqltypes.AutoString(), nullable=False),
    sa.Column('tipo', sqlmodel.sql.sqltypes.AutoString(), nullable=False),
    sa.Column('grupo', sqlmodel.sql.sqltypes.AutoString(), nullable=True),
    sa.Column('descripcion', sqlmodel.sql.sqltypes.AutoString(), nullable=True),
    sa.Column('fk_clase_entidad', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['fk_clase_entidad'], ['claseentidad.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('entidadatributo')
    op.drop_table('claseentidad')
    # ### end Alembic commands ###
