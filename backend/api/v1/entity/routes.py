from fastapi import APIRouter

router = APIRouter()

@router.get('')
def get_entities():
	...

@router.get('/{id}')
def get_entity():
	...

@router.post('')
def create_entity():
	...

@router.put('/{id}')
def update_entity():
	...

@router.delete('/{id}')
def delete_entity():
	...