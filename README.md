BTC-cent forecast entry: it predicts the BTC price 240 minutes (one 4-hour bar) ahead from a market's historical price closes.
Method: persistence, where the last observed close is the point forecast, clamped to the open (0, 10000000) price grid with five decimals.
Each case file is read from MAKEFUN_INPUT_DIR (default /input) and written as <id>.out under MAKEFUN_OUTPUT_DIR (default /output).
Run it with: node main.ts — Node 22 executes TypeScript directly, so there is no build step and no dependencies.
Standard library only and fully deterministic.
