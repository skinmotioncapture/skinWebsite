#!/bin/bash
# Requires Inkscape
inkscape -z -f square2.svg -w 558 -j -e ../tile.png
inkscape -z -f square2.svg -w 180 -j -e ../apple-touch-icon.png
inkscape -z -f square2.svg -w 32 -j -e temp.png
convert -resize 32x32 "temp.png" -colors 256 "../favicon.ico"
rm temp.png
# convert -resize 32x32 "square2.svg" -colors 256 "../favicon.ico"
# cp Basic.svg ../images/logo.svg
