from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
	ENV : str = 'development'

	model_config = SettingsConfigDict(env_file=".env")

env = Settings()