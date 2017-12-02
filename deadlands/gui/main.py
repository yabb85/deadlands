import webview
import logging
from threading import Thread
from threading import Lock
from time import sleep
from server import run_server


server_lock = Lock()
logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)


def url_ok(url, port):
    """docstring for load_html"""
    try:
        from http.client import HTTPConnection
    except ImportError:
        from httplib import HTTPConnection

    try:
        conn = HTTPConnection(url, port)
        conn.request("GET", "/")
        r = conn.getresponse()
        return r.status == 200
    except Exception as e:
        logger.exception("Server not started")
        return False


def main():
    """docstring for main"""
    logger.debug('Start server')
    t = Thread(target=run_server)
    t.daemon = True
    t.start()

    logger.debug("Checking server")
    while not url_ok('127.0.0.1', 5000):
        sleep(0.1)

    webview.create_window("It works, Jim!", 'http://127.0.0.1:5000',
                          min_size=(1200, 760))


if __name__ == '__main__':
    main()
