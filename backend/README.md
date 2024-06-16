# erpyntic

### Dependencias
```
fastapi
sqlmodel
pydantic[email]
uvicorn
httpx
python-multipart
python-jose
passlib
pymysql
pandas
numpy
alembic
```


## Instalacion

Ejecutar el comando pip con esta secuencia

```shell
pip install fastapi sqlmodel pydantic[email] uvicorn httpx python-multipart python-jose passlib pymysql pandas numpy alembic
```

## Migraciones

El proyecto cuenta con `alembic`. Esto permite controlar todas las modificaciones que se hacen en las tablas sin necesidad de borrar todo y/o modificar la base de datos de forma manual ya que detecta los cambios de aquellos modelos de tablas que hereden de `SQLModel` con el atributo `table = True`

Primero revisar los cambios

```shell
alembic revision --autogenerate -m "Primera revision"
```

Luego para impactar los ultimos cambios a la DB destino. 

```shell
alembic upgrade head
```