# A birthday adventure for Sigrid

An olive-green, travel-inspired birthday website celebrating Sigrid's 28th birthday. Includes an illustrated coastal railway, an interactive birthday candle, confetti, and a boarding-pass reveal for **Ticket to Ride: Rails & Sails**.

## Open the website

Open `index.html` directly in a modern browser. No installation or build is needed.

For a local preview, run from this directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then visit <http://127.0.0.1:8000>.

## Personalise or share

- Edit the birthday message and gift details in `index.html`.
- Change the palette using the custom properties at the top of `style.css`.
- The coastal illustration is original SVG artwork in `journey.svg`.
- Publish this directory with any static website host, such as GitHub Pages.

Google Fonts supplies the display, body, and handwritten fonts when online; local fallback fonts keep the site usable offline. All artwork and interactions are local, with no tracking or external JavaScript.

The site supports mobile layouts, keyboard navigation, native dialog focus management, and reduced-motion preferences. The candle works by tapping or clicking; microphone access is not requested.