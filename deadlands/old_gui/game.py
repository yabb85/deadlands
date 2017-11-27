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
from player import Player
from textbox import TextBox


class Game(object):
    """docstring for Game"""
    def __init__(self, window):
        self.player = Player()
        self.loop = True
        self.window = window
        width, height = self.window.get_size()
        self.background = pg.image.load(join(DATA_DIR,
                                             'floor-1256804.jpg')).convert()
        self.background = pg.transform.scale(self.background, (width, height))
        self.sheet = pg.Rect(100, 100, 800, 500)
        self.input = TextBox((110, 110, 150, 30),
                             command=self.player.set_name,
                             inactive_on_enter=False,
                             active_color=pg.Color('gray'))

    def event_loop(self):
        """docstring for event_loop"""
        for evt in pg.event.get():
            if evt.type == QUIT or \
                    (evt.type == KEYDOWN and evt.key == K_ESCAPE):
                self.loop = False
            self.input.get_event(evt)

    def main_loop(self):
        """docstring for start"""
        while self.loop:
            self.event_loop()
            self.input.update()
            self.window.blit(self.background, (0, 0))
            pg.draw.rect(self.window, (250, 250, 250), (100, 100, 1080, 520))
            self.input.draw(self.window)
            pg.display.flip()

    def change_color(self, id, color):
        try:
            self.color = pg.Color(str(color))
        except ValueError:
            print("Please input a valid color name.")
