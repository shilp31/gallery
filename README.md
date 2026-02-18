# Image Gallery

A simple, responsive static image gallery that can be hosted on GitHub Pages. Features category-based filtering and smooth animations.

## Features

- 📸 Display images in a responsive grid layout
- 🗂️ Filter images by category (Nature, Architecture, People, Animals)
- 🎨 Beautiful gradient design with smooth animations
- 📱 Fully responsive - works on desktop, tablet, and mobile
- ⚡ Fast and lightweight - pure HTML, CSS, and JavaScript
- 🚀 Easy to deploy on GitHub Pages

## Live Demo

Once deployed, your gallery will be available at:
`https://[your-username].github.io/gallery/`

## How to Use

### Adding Your Own Images

1. Replace the placeholder image URLs in `index.html` with your own images
2. You can use:
   - External URLs (e.g., from image hosting services)
   - Images from the repository (place them in an `images/` folder)
   - Any valid image URL

Example:
```html
<div class="gallery-item" data-category="nature">
    <img src="images/my-photo.jpg" alt="My Photo">
    <div class="item-overlay">
        <h3>My Photo Title</h3>
        <p>Category: Nature</p>
    </div>
</div>
```

### Adding New Categories

1. Add a new button in the navigation section of `index.html`:
```html
<button class="category-btn" data-category="your-category">Your Category</button>
```

2. Add images with the matching category:
```html
<div class="gallery-item" data-category="your-category">
    <img src="your-image.jpg" alt="Description">
    <div class="item-overlay">
        <h3>Image Title</h3>
        <p>Category: Your Category</p>
    </div>
</div>
```

### Customizing Styles

Edit `style.css` to customize:
- Colors (change the gradient colors in header and button styles)
- Grid layout (modify `grid-template-columns` in `.gallery-container`)
- Image sizes (adjust height in `.gallery-item img`)
- Animations and transitions

## Deploying to GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Source", select the branch you want to deploy (usually `main` or `master`)
4. Click "Save"
5. Your site will be published at `https://[your-username].github.io/gallery/`

## File Structure

```
gallery/
├── index.html      # Main HTML file with gallery structure
├── style.css       # Styling and responsive design
├── script.js       # Category filtering functionality
└── README.md       # Documentation
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Customization Ideas

- Add a lightbox/modal for full-size image viewing
- Implement image lazy loading for better performance
- Add search functionality
- Include pagination for large galleries
- Add image upload functionality
- Integrate with image APIs

## License

Feel free to use and modify this gallery for your projects!