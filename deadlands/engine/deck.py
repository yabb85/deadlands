#! /usr/bin/python
# -*- coding:utf-8 -*-
"""
"""

from random import shuffle


class Card(object):
    """
    Play cards
    """
    def __init__(self, color, value):
        super(Card, self).__init__()
        self.color = color
        self.value = value
        if self.value >= 0 and self.value <= 1:
            self.dice = 'd12'
        elif self.value == 2:
            self.dice = 'd4'
        elif self.value >= 3 and self.value <= 8:
            self.dice = 'd6'
        elif self.value >= 9 and self.value <= 11:
            self.dice = 'd8'
        else:
            self.dice = 'd10'
        self.coordination = 'joker'
        if 'Spade' in self.color:
            self.coordination = 1
        elif 'Diamond' in self.color:
            self.coordination = 2
        elif 'Heart' in self.color:
            self.coordination = 3
        elif 'Club' in self.color:
            self.coordination = 4

    def show(self):
        """
        display the name of card
        """
        print('{} {}'.format(self.value, self.color))
        print('{}{}'.format(self.coordination, self.dice))

    def serialize(self):
        """docstring for serialize"""
        return {
            'value': self.value,
            'color': self.color,
            'coordination': self.coordination,
            'dice': self.dice
        }


class Deck(object):
    """
    Deck contains all cards
    """
    def __init__(self):
        super(Deck, self).__init__()
        self.cards = []
        for color in ['Spade', 'Club', 'Diamond', 'Heart']:
            for value in range(1, 14):
                self.cards.append(Card(color, value))
        self.cards.append(Card('Black', 0))
        self.cards.append(Card('Red', 0))

    def show(self):
        """
        Display the name of all cards in deck
        """
        for card in self.cards:
            card.show()

    def shuffle(self):
        """
        shuffle the deck
        """
        shuffle(self.cards)

    def draw(self):
        """
        """
        return self.cards.pop()
