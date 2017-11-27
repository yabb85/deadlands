from flask import Flask
from flask import jsonify
from flask import render_template
from os.path import dirname
from os.path import join
from os.path import realpath

import webview
import logging


CUR_DIR = dirname(realpath(__file__))
STATIC_DIR = join(CUR_DIR, 'static')
TEMPLATE_DIR = join(CUR_DIR, 'template')

server = Flask(__name__, static_folder=STATIC_DIR, template_folder=TEMPLATE_DIR)


@server.route('/')
def index():
    """docstring for index"""
    return render_template('index.html')


@server.route('/quit')
def quit():
    """docstring for quit"""
    webview.destroy_window()
    return jsonify({})


@server.route('/generator')
def gen_main():
    """docstring for gen_main"""
    return render_template('generator.html')


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
