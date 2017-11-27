"""
"""

import gi
gi.require_version('Gtk', '3.0')
from gi.repository import Gtk
from gi.repository import Gdk


class Builder(object):
    """docstring for MyWindow"""
    def __init__(self):
        self.builder = Gtk.Builder()
        self.builder.add_from_file("deadlands/data/main.glade")
        window = self.builder.get_object("window1")
        window.connect("delete-event", Gtk.main_quit)
        screen = Gdk.Screen.get_default()
        css_provider = Gtk.CssProvider()
        css_provider.load_from_path('deadlands/data/test.css')
        context = Gtk.StyleContext()
        context.add_provider_for_screen(screen, css_provider,
                                        Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION)
        window.show_all()

    def on_click(self, widget):
        """docstring for on_click"""
        print("toto")


app = Builder()
Gtk.main()
