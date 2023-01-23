from flask import Flask
from datetime import datetime, timedelta, timezone
from flask_cors import CORS


api = Flask('__name__', static_folder='flask_backend/static')

CORS(api, supports_credentials=True)

from flask_backend import routes