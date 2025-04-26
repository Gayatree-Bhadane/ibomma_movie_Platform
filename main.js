// Movie titles and their respective sections
const movies = [
    { name: 'Devara', link: 'https://www.dailymotion.com/video/x9bafpc' },
    { name: 'Shiddat', link: 'https://archive.org/details/shiddat-2021-hindi.-untouched.-web.-dl.-720p.-avcx-264.-aac.-superhit-bollywood-_20240913' },
    { name: 'Sanam Teri Kasam', link: 'https://www.youtube.com/watch?v=1QnMom9my_w' },
    { name: 'Rustom', link: 'https://www.youtube.com/watch?v=PoVBdugwPdY' },
    { name: 'Uri', link: 'https://www.youtube.com/watch?v=YGlabG8LFz0' },
    { name: 'Amaran', link: 'https://www.youtube.com/watch?v=CgWK2Y4xpLI' },
    { name: 'Major', link: 'https://archive.org/details/major.-480p-hin.-hd' },
    { name: 'Chhava', link: 'https://www.youtube.com/watch?v=j12tFivRwew' },
    { name: 'Sita Ramam', link: 'https://www.youtube.com/watch?v=RferEel7mj8' },
    { name: 'Jersey', link: 'https://www.youtube.com/watch?v=qky1I3a2e0Q' },
    { name: 'Sattelite Shankar', link: 'https://www.youtube.com/watch?v=cOKzUIgH6Hg' },
    { name: 'Paltan', link: 'https://www.youtube.com/watch?v=SsbEC6BclaI' },
    // Add all your movie objects here...
  ];
  
  // Function to search the movie by title
  function searchMovie() {
    let input = document.getElementById("searchInput").value.toLowerCase(); // Get input value
    let sections = document.querySelectorAll("section"); // Get all movie sections
    
    let found = false; // Flag to check if any movie is found
  
    // Loop through each section (movie)
    sections.forEach((section, index) => {
      let movieName = movies[index].name.toLowerCase(); // Get movie name and convert to lowercase
  
      // If the movie name matches the search input, show it; otherwise, hide it
      if (movieName.includes(input)) {
        section.style.display = "block"; // Show the movie
        found = true;
      } else {
        section.style.display = "none"; // Hide the movie
      }
    });
  
    // If no movie found, display an error message
    if (!found && input !== "") {
      alert("No movie found matching your search!");
    }
  }
  