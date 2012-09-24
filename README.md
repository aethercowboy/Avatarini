Avatarini
=========

A JavaScript library for the quick generation of an SVG/Canvas-friendly character.

About
=====

Avatarini attempts to allow the user to create a visual representation of a character using a simple specification.
Once the character is specified, there are several options for export:

1. toSVG() - Returns the Avatarini object as an SVG group.

2. toCanvas() - Returns the Avatarini object in a Canvas-friendly manner.

3. toOAML() - Returns the Avatarini object as an OAML (OpenAvatar Markup Language) object. This is useful if anybody 
adopts the OAML format (https://github.com/aethercowboy/OpenAvatar). In the meantime, it will act as a shameless plug
for another one of my products.

Speaking of Shameless Plugs...
==============================

The reason behind the creation of this product was to augment SVGComic (https://github.com/aethercowboy/SVGComic), which
allows the user to generate SVG-based comics relatively quickly, with little to no artistic skill. I was originally 
going to make it a library in that project, but I thought that it could possibly stand on its own. So, here it is.

How to Use It
=============

To use this library, first you must reference it like any other JS library. Then, call it as such:

    var holt = new Avatarini({
        name     : "Holt",
        species  : "human", // this acts as a template, filling in a lot of the information
        gender   : "male",
        skincolor: "blue",
        haircolor: "orange",
      });
    
    holt.mouth.state = "open";
    
    var holtSVG1 = holt.toSVG();
    
    holt.mouth.state = "grin";
    
    var holtSVG2 = holt.toSVG();

Each part of the person corresponds to a callable object where the relevant settings may be tweaked. Then, when the 
object is ready to be exported, it sends it through the appropriate translator and dumps it to the lValue.

Caveat Emptor
=============

This is a work in progress. If you have useful comments or suggestions for improvement, please submit an issue.