#! /usr/bin/python
# -*- coding:utf-8 -*-
"""
"""


import pygame as pg
from const import DATA_DIR
from os.path import join
from pygame.locals import KEYDOWN
from pygame.locals import K_ESCAPE
from pygame.locals import QUIT


class Game(object):
    """docstring for Game"""
    def __init__(self, window):
        self.loop = True
        self.window = window
        width, height = self.window.get_size()
        self.background = pg.image.load(join(DATA_DIR,
                                          'floor-1256804.jpg')).convert()
        self.background = pg.transform.scale(self.background, (width, height))

    def event_loop(self):
        """docstring for event_loop"""
        for evt in pg.event.get():
            if evt.type == QUIT or \
                    (evt.type == KEYDOWN and evt.key == K_ESCAPE):
                self.loop = False

    def main_loop(self):
        """docstring for start"""
        while self.loop:
            self.event_loop()
            self.window.blit(self.background, (0, 0))
            pg.display.flip()
