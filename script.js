document.addEventListener("DOMContentLoaded", () => {
  updateVisits();
});

async function updateVisits() {
  try {
    const response = await fetch("https://games.roblox.com/v1/games?universeIds=1842715780");
    const data = await response.json();
    const visits = data.data[0].visits;
    const visitsElement = document.querySelector('.project-1-visits');
    visitsElement.textContent = `VISITS: ${visits}`;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
