# btc-cent-forecast

A one-minute BTC close series is given and the entry must name the close 240 minutes later.
The house baseline is persistence; this entry reads every case file, keeps the last close on the
price grid, and writes one forecast per case. Node 22, standard library only, offline.

    mkdir -p out && MAKEFUN_INPUT_DIR=input MAKEFUN_OUTPUT_DIR=out node main.ts

SPDX-License-Identifier: MIT
