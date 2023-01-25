import os
import secrets
import json
from PIL import Image
from collections import Counter
from flask import Flask, render_template, url_for, flash, redirect, request, abort, send_file, jsonify, make_response
from flask_backend import api

from point_e.live_features.generate_model import generatePointCloud, GenerateMeshFromPointCloud

@api.route("/generate", methods=['POST', 'PUT','DELETE'])
def devepisode():
    if request.method == 'POST':
        data = request.get_json(force=True)
        # generatePointCloud('test')
        GenerateMeshFromPointCloud()
        response = jsonify({'response': 'post'})
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
    response = open('flask_backend/static/models/2.ply')
    return response, 200