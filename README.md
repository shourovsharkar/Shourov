# Freelancer Jakaria — Portfolio Website

A responsive dark navy + gold digital marketing portfolio built with HTML, CSS and vanilla JavaScript. Designed for GitHub Pages.

## Important image fix
The cover banner is now saved as a real PNG file (not JPEG data with a `.png` extension). Both image files are included in `assets/` and referenced by `index.html`:
- `assets/jakaria-profile.jpg`
- `assets/jakaria-cover.png`

## Publish on GitHub Pages
1. Open your GitHub repository.
2. Extract this ZIP on your device.
3. Upload the **contents inside** the extracted folder to the repository's root (not the outer folder itself). The repository root must contain `index.html`, `style.css`, `script.js`, and the `assets` folder.
4. Make sure both image files remain inside `assets/` with exactly the filenames shown above.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select branch `main` and folder `/(root)`, then press **Save**.
8. Wait for GitHub Pages to publish, then refresh the website. If the old version remains, do a hard refresh or clear the browser cache.

Expected structure:
```
index.html
style.css
script.js
README.md
assets/
  jakaria-profile.jpg
  jakaria-cover.png
```

## Enable the contact inbox
GitHub Pages cannot run a private server or store submitted messages by itself. To receive form messages in your email, create a form at Formspree, verify your email, and paste its endpoint into `formEndpoint` in `script.js`.

## Personalize social links
Edit the social URLs in `index.html` and `script.js` as needed.
