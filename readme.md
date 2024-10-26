# Drum Kit

This project is inspired by Day 1 of Wes Bos's [JavaScript 30 Course](https://javascript30.com/). The goal is to create an interactive drum kit that plays sounds when keys are pressed on the keyboard or clicked/tapped on the screen.

## Project Overview

The **Drum Kit** allows users to:

- Play different drum sounds by pressing specific keys on the keyboard.
- Click or tap on-screen keys to produce sounds, ideal for touch screens.

The project consists of HTML, CSS, and JavaScript files that create a responsive drum interface.

### Key Mappings

| Key | Sound      |
|-----|------------|
| A   | Clap       |
| S   | Hihat      |
| D   | Kick       |
| F   | Openhat    |
| G   | Boom       |
| H   | Ride       |
| J   | Snare      |
| K   | Tom        |
| L   | Tink       |

## How It Works

1. Each drum key is linked to an `audio` element with a unique `data-key` attribute.
2. JavaScript detects the key press or click event and matches it to the corresponding `data-key`.
3. When a match is found:
   - The audio element is played from the beginning.
   - The key element is highlighted with a CSS class.
4. The transition effect is removed once the sound and animation are complete.

## How to Use

- Clone or download the repository.
- Open index.html in a browser.
- Press any of the mapped keys (A, S, D, F, G, H, J, K, L) or click/tap the on-screen keys to play sounds.

## Customizations

- **Tapping/Clicking Functionality**: Tapping or clicking on the keys plays the corresponding sounds, making it compatible with touch screens. This feature has been implemented to enhance interactivity.
- **Modifying Styles**: Customize key appearance and animations in style.css.
