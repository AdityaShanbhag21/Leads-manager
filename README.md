#  Leads Manager - Chrome Extension

A lightweight and efficient Chrome extension that helps you **save and manage URLs (leads)** with just a click—whether it’s an input or your current browser tab.

---

##  Features

-  Save any URL manually via an input box.
-  Save your current tab with one click.
-  Delete individual leads or clear all.
-  Persistent storage using `localStorage`.
-  Opens links in new tabs directly from the list.
-  Simple and intuitive UI inside the popup.

---

##  How It Works

- Click the **extension icon** to open the popup.
- Enter a URL or click **SAVE TAB** to store the current tab.
- All saved leads appear in a list with clickable links and delete buttons.
- Click **DELETE ALL** to clear your entire lead list.

---

##  Project Structure

```plaintext
 leads-tracker-extension/
│
├── index.html         # Popup HTML structure
├── index.css          # Styles for the popup
├── index.js           # Main logic (DOM, storage, rendering)
├── background.js      # Handles background tab queries
├── manifest.json      # Chrome extension config
├── logo.png           # Extension icon
```

---

##  Tech Stack

- HTML + CSS + JavaScript (Vanilla)
- Chrome Extensions API
- `localStorage` for data persistence

---

##  Setup Instructions

1. **Clone or download** this repository.
2. Go to `chrome://extensions/`.
3. Enable **Developer mode** (top-right).
4. Click **Load unpacked**.
5. Select the project folder.

---

##  Example Use Cases

- Saving blog links to read later
- Bookmarking tutorials while learning
- Keeping a quick-access list of tools or docs

---

##  License

MIT License — Feel free to use, modify, and share.
