import os
import secrets
import json
from PIL import Image
from collections import Counter
from random import randrange
from flask import Flask, render_template, url_for, flash, redirect, request, abort, send_file, jsonify, make_response
from flask_backend import api, socketio
from flask_socketio import emit


from point_e.live_features.generate_model import generatePointCloud, GenerateMeshFromPointCloud



@api.route("/generate", methods=['POST', 'PUT','DELETE'])
def devepisode():
    if request.method == 'POST':
        data = request.get_json(force=True)
        id = randrange(0, 10000)
        generatePointCloud(data['prompt'], data['density'], id)
        GenerateMeshFromPointCloud(id, data['resolution'])
        response = jsonify({'mesh_id': id})
        return response, 200
    elif request.method == 'PUT':
        data = request.get_json(force=True)
        response = jsonify({'response': 'put'})
        return response, 200
    elif request.method == 'DELETE':
        response = jsonify({'response': 'delete'})
        return response, 200

@api.route("/models/<int:id>", methods=['GET'])
def models(id):
    return send_file(f'flask_backend/static/models/{id}.ply')

@socketio.on('generate mesh')
def generate_mesh(data):
    payload = json.loads(data)
    id = randrange(0, 10000)
    emit('display mode', {'display': False})
    emit('model status', {'status': 'point cloud generating'})
    generatePointCloud(payload['prompt'], payload['density'], id)
    emit('model status', {'status': 'point cloud generated'})
    emit('model status', {'status': 'mesh generating'})
    GenerateMeshFromPointCloud(id, payload['resolution'])
    emit('model status', {'status': 'mesh generated'})
    emit('mesh id', {'mesh_id': id})
    emit('display mode', {'display': True})

@socketio.on('connect')
def test_connect():
    emit('my response', {'data': 'Connected'})

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')