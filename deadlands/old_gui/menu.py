#! /usr/bin/python
# -*- coding:utf-8 -*-
"""
"""

from const import DATA_DIR
from os.path import join
from pygame import font
from pygame.locals import MOUSEMOTION
from pygame.locals import MOUSEBUTTONDOWN


class Menu(object):
    """Create a game menu"""
    container = []

    def __init__(self, screen):
        """Initialize menu with current screen"""
        self.screen = screen
        self.font = font.Font(join(DATA_DIR, 'Durango.ttf'), 32)
        self.sep = 50

    def add(self, text, callback):
        """
        Add a new content in Menu
        """
        self.container.append(Content(text, self.font, (0, 0, 0), (255, 0, 0),
                                      callback))

    def set_position(self, x, y):
        """Set the position of menu"""
        self.position = (x, y)
        height = 0
        width = 0
        for content in self.container:
            w, h = content.size
            height += h + self.sep
        height -= self.sep
        pos_x = x
        pos_y = y - height / 2
        for content in self.container:
            width, height = content.size
            content.pos.center = (pos_x, pos_y)
            pos_y += height + self.sep

    def remove(self, text):
        """
        Remove a content in Menu
        """
        for content in self.container:
            if text in content.text:
                self.container.remove(content)
                del content

    def draw(self):
        """
        Display Menu on screen
        """
        for content in self.container:
            self.screen.blit(content.surface, content.pos)

    def get_event(self, pos, evt):
        """docstring for select"""
        for content in self.container:
            content.select(pos, evt)


class Content(object):
    """
    Create an element in menu
    """
    def __init__(self, text, font, color, highlight, callback):
        self.text = text
        self.callback = callback
        self.color = color
        self.highlight = highlight
        self.font = font
        self.surface = font.render(self.text, 1, self.color)
        self.size = self.surface.get_size()
        self.pos = self.surface.get_rect()

    def select(self, pos, evt):
        """
        Detect event on element
        """
        if evt.type == MOUSEMOTION:
            if self.pos.collidepoint(pos[0], pos[1]):
                self.surface = self.font.render(self.text, 1, self.highlight)
            else:
                self.surface = self.font.render(self.text, 1, self.color)
        elif evt.type == MOUSEBUTTONDOWN:
            if self.pos.collidepoint(pos[0], pos[1]):
                self.callback()
