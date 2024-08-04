
# myFlix-client

myFlix is a frontend application for the movie database myFlix. It allows users to browse movies, view detailed information about each movie, manage their profile, and maintain a list of their favorite movies. The application is built using React and React Bootstrap, with React Router for client-side routing.


## Features

- **User Authentication**: Users can signup, login, and logout
- **Movie Browsing**: Browsing through a collection of movies   fetched from the vackend API
- **Movie Details**: View detailed information about specific movies
- **User Profile**: View and updare user profile information
- **Favorite Movies**: Add or remove movies from a list of favorites
- **Search Functionality**: Search for movies by title using a seach bar in the navigation


## Dependencies

- React
- React Router
- React Bootsrap
- Bootstrap
- Fetch API for HTTP requests
## Components

### MainView

The main entry point of the application, responsible for routing and managing the application's state.

### NavigationBar

The `NavigationBar` component provides the top navigation bar with links to different routes and a search bar.

### MovieCard

The `MovieCard` component displays individual movie information and allows users to add or remove movies from their favorites.
## Usage

- **Signup**: Navigate to signup page to create new account
- **Login**: Navigation to the login page to acess your account
- **Browse Movies**: View the list of available movies
- **View Movie Details**: Click on a movie card to see details information
- **Manage Favorites**: Add or remove movies from your favorites list
- **Update Profile**: Update user profile information from the profile page
- **Search**: Use the search bar to filter movies by title
## Deployment

1. Build the application for production:

   ```sh
   npm run build
   ```

2. Deploy the `build` directory to your preferred web server or hosting service.
## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.
## Hosting

This project is hosted on Netlify: https://xaviersmyflixapp.netlify.app