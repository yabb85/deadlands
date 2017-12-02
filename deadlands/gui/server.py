from flask import Flask
from flask import jsonify
from flask import render_template
from os.path import dirname
from os.path import join
from os.path import realpath
from ..engine.deck import Deck

import webview
import logging


CUR_DIR = dirname(realpath(__file__))
STATIC_DIR = join(CUR_DIR, 'static')
TEMPLATE_DIR = join(CUR_DIR, 'template')

server = Flask(__name__, static_folder=STATIC_DIR, template_folder=TEMPLATE_DIR)


@server.route('/', defaults={'path': ''})
@server.route('/<path:path>')
def index(path):
    """docstring for index"""
    return render_template('test.html')


@server.route('/quit')
def quit():
    """docstring for quit"""
    webview.destroy_window()
    return jsonify({})


@server.route('/tirage')
def gen_main():
    """docstring for gen_main"""
    return render_template('tirage.html')


@server.route('/distribute')
def distribute():
    """docstring for distribute"""
    result = []
    deck = Deck()
    deck.shuffle()
    for i in range(0, 12):
        result.append(deck.draw().serialize())
    return jsonify(result)


@server.route('/test')
def test():
    """docstring for test"""
    return render_template('test.html')


def run_server():
    """docstring for run_server"""
    logging.debug('start flask')
    server.run(host='127.0.0.1', port=5000, threaded=True)


if __name__ == '__main__':
    run_server()
