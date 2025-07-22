import os

TORTOISE_ORM = {
    "connections": {
         "default":  os.environ.get("DATABASE_URL")
    },
    "apps": {
        "docspider-ia": {
            "models": [
                 "models", "aerich.models"
            ],
            "default_connection": "default",
        },
    },
}