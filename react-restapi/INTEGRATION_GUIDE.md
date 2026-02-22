# Villocillo Finals Website

An integrated React portfolio website with REST API capabilities, configured for seamless Vercel deployment.

## Project Structure

- **Portfolio**: Personal website component showcasing skills and background
- **REST API Testing**: CRUD operations page for API integration testing
- **Bootstrap Styling**: Responsive design with Bootstrap 5

## Features

- ✅ Personal Portfolio Page (`/portfolio` or `/`)
- ✅ REST API Testing Page (`/api`)
- ✅ React Router navigation
- ✅ Axios for API calls
- ✅ Vercel-ready deployment
- ✅ Bootstrap 5 responsive design
- ✅ Custom styling integrated

## Installation

```bash
cd react-restapi
npm install
```

## Development

Start the dev server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Build

```bash
npm run build
```

## Routes

- `/` - Home (Personal Portfolio)
- `/portfolio` - Personal Portfolio Page
- `/api` - REST API Testing Page

## Deployment

### Vercel

The project is configured for Vercel deployment. Just push to your repository and connect it to Vercel:

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically on push

#### Environment Variables

Set these in Vercel dashboard if using a custom API:
- `VITE_API_URL` - Your REST API base URL (optional)

## Technologies Used

- **Frontend**: React 19, React Router 7
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **Styling**: Bootstrap 5, Custom CSS
- **Deployment**: Vercel
- **ESLint**: Code quality

## API Integration

The application uses JSONPlaceholder for demo REST API calls. To connect to your own API:

1. Update the API URLs in `src/components/App.jsx`
2. Add environment variables for API configuration

Example:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com';
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## File Structure

```
src/
├── components/
│   └── PersonalWebsite.jsx    # Portfolio component
├── App.jsx                      # Main app with routing
├── main.jsx                     # Entry point
├── App.css                      # App styles
├── index.css                    # Global styles
└── personalWebsite.css          # Portfolio styles

public/
├── favicon.ico                  # Website favicon

index.html                       # HTML template
vite.config.js                   # Vite configuration
vercel.json                      # Vercel deployment config
package.json                     # Dependencies & scripts
```

## Future Enhancements

- [ ] Add Vue.js support for component flexibility
- [ ] Backend API server integration
- [ ] Database integration
- [ ] Email contact form
- [ ] Blog/Projects showcase
- [ ] Dark mode toggle
- [ ] Performance optimization

## License

MIT

## Notes

- The `Finals Website` folder is now fully integrated as a React component
- All styling and assets are properly linked
- The app is ready for production deployment on Vercel
