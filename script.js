document.addEventListener("DOMContentLoaded", () => {
  updateVisits();
});

async function updateVisits() {
  try {
    const response = await fetch(${{ secrets.API_URL }});
    const data = await response.json();
    const visits = data.data[0].visits;
    const visitsElement = document.querySelector('.project-1-visits');
    visitsElement.textContent = `VISITS: ${visits}`;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
