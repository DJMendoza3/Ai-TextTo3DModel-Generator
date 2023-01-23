import os
import secrets
import json
from PIL import Image
from collections import Counter
from flask import Flask, render_template, url_for, flash, redirect, request, abort, send_file, jsonify, make_response
from flask_backend import api

from live_features.generate_model import generate

@api.route("/test", methods=['GET', 'POST', 'PUT','DELETE'])
def devepisode():
    if request.method == 'GET':
        # generate('test')
        return send_file(url_for('static', filename='images/test.npz'))
    elif request.method == 'POST':
        data = request.get_json(force=True)
        response = jsonify({'response': 'post'})
        return response, 200
    elif request.method == 'PUT':
        data = request.get_json(force=True)
        response = jsonify({'response': 'put'})
        return response, 200
    elif request.method == 'DELETE':
        response = jsonify({'response': 'delete'})
        return response, 200

