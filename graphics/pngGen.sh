#!/bin/bash
# Requires Inkscape
inkscape -z -f square.svg -w 558 -j -e ../tile.png
inkscape -z -f square.svg -w 180 -j -e ../apple-touch-icon.png
convert -resize 32x32 "square.svg" -colors 256 "../favicon.ico"
cp Basic.svg ../images/logo.svg
