# chrome-extension-markdown-img-converter

This project is a Chrome extension that converts Markdown image syntax to HTML `<img>` tags when editing textareas on GitHub. It automatically specifies the image width as `width="300"`.

## Features

- Automatically detects Markdown image syntax in textareas.
- Converts the syntax to HTML `<img>` tags for easy embedding of images.
- Automatically adds `width="300"` attribute to the `<img>` tag.

## Installation

1. Clone this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select this repository's directory.

## Usage

1. Navigate to any GitHub page with a textarea (e.g., issues, pull requests).
2. Click on the extension icon in the Chrome toolbar.
3. Press the button in the popup to convert Markdown image syntax to HTML `<img>` tags.
