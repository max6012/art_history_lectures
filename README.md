# Art History Lecture Series

A React-based presentation application for delivering art history lectures with dual-screen support.

## Features

- **Landing Page**: Browse and select from available lectures
- **Sidebar Navigation**: Collapsible sections with quick slide access
- **Presenter Mode**: Display speaker notes alongside slides (press `P`)
- **Keyboard Controls**: Navigate efficiently during presentations
- **Dual Screen Ready**: Project slides to external display while viewing notes on your laptop

## Getting Started

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

Then open your browser to the URL shown (typically `http://localhost:5173`)

### Building for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## Keyboard Shortcuts

- **Arrow Right / Space**: Next slide
- **Arrow Left**: Previous slide
- **P**: Toggle presenter mode (show/hide speaker notes)
- **S**: Toggle sidebar
- **Escape**: Return to landing page

## Adding New Lectures

Edit `src/data/lectures.js` to add new lectures. Each lecture has this structure:

```javascript
{
  id: 'unique-id',
  title: 'Lecture Title',
  sections: [
    {
      id: 'section-id',
      title: 'Section Name',
      slides: [
        {
          id: 1, // unique slide number
          title: 'Slide Title',
          content: 'Main slide content that will be projected',
          notes: 'Speaker notes visible only in presenter mode'
        }
      ]
    }
  ]
}
```

## Dual Screen Setup (MacBook Air)

1. Connect your projector to your MacBook
2. Open System Settings > Displays
3. Configure as "Extended Display" (not mirrored)
4. Run the app and navigate to a lecture
5. Press `P` to enable presenter mode
6. Drag the browser window to your external display for the audience
7. Keep your laptop screen showing the presenter notes

Alternatively, you can open two browser windows:
- One in fullscreen on the projector (without presenter mode)
- One on your laptop (with presenter mode enabled)

## Project Structure

```
src/
├── components/
│   ├── LandingPage.jsx       # Main menu
│   ├── LandingPage.css
│   ├── LectureViewer.jsx     # Slide presentation view
│   ├── LectureViewer.css
│   ├── Sidebar.jsx           # Navigation sidebar
│   └── Sidebar.css
├── data/
│   └── lectures.js           # Lecture content
├── App.jsx                   # Main app with routing
└── main.jsx                  # Entry point
```

## Tips

- Keep slide content concise and readable
- Use speaker notes for detailed explanations
- Test your setup before the actual lecture
- Consider using fullscreen mode (F11) on the projector display
