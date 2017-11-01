#! /usr/bin/python
# -*- coding:utf-8 -*-
"""
Generateur de personnage pour deadlands
"""


import sys
import pygame as pg
from const import DATA_DIR
from game import Game
from menu import Menu
from os.path import join
from pygame.locals import KEYDOWN
from pygame.locals import K_ESCAPE
from pygame.locals import MOUSEMOTION
from pygame.locals import MOUSEBUTTONDOWN
from pygame.locals import QUIT


class Deadlands(object):
    """docstring for Deadlands"""
    def __init__(self):
        pg.init()
        self.loop = True
        self.screen = pg.display.set_mode((1280, 720))
        self.clock = pg.time.Clock()
        self.fps = 60
        width, height = self.screen.get_size()
        self.background = pg.image.load(join(DATA_DIR, 'floor-1256804.jpg')).convert()
        self.background = pg.transform.scale(self.background, (width, height))
        self.menu = Menu(self.screen)
        self.menu.add('START', self.game)
        self.menu.add('QUITTER', self.quit)
        pos_x = width /4
        pos_y = height / 2
        self.menu.set_position(pos_x, pos_y)

    def event_loop(self):
        """docstring for event_loop"""
        for evt in pg.event.get():
            if evt.type == QUIT or \
                    (evt.type == KEYDOWN and evt.key == K_ESCAPE):
                self.loop = False

            if evt.type == MOUSEMOTION or evt.type == MOUSEBUTTONDOWN:
                pos = pg.mouse.get_pos()
                self.menu.get_event(pos, evt)

    def main_loop(self):
        """docstring for start"""
        while self.loop:
            self.event_loop()
            self.screen.blit(self.background, (0, 0))
            self.menu.draw()
            pg.display.update()
            self.clock.tick(self.fps)

    def game(self):
        """docstring for game"""
        yeah = Game(self.screen)
        yeah.main_loop()

    def quit(self):
        """docstring for quit"""
        self.loop = False


if __name__ == '__main__':
    deadlands = Deadlands()
    deadlands.main_loop()
    pg.quit()
    sys.exit()
