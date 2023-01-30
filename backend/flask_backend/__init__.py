from flask import Flask
from flask_cors import CORS
from flask_socketio import SocketIO


api = Flask('__name__', static_folder='./static')

CORS(api, supports_credentials=True)
socketio = SocketIO(api, cors_allowed_origins="*")

from flask_backend import routes