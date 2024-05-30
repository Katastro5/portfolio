const mmpUniverseId = "1842715780";
const ronnectorUniverseId = "4862519933";

async function getVisits(universeId, elementId) {
    const apiUrl = `https://script.google.com/macros/s/AKfycbzsgA5UOPDhY2qrSSyuShTLDPghoeCJaLatqXxA0KWMRYwp7f1RDSLDjopEGbIgbqIT/exec?UniverseId=${universeId}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const element = document.getElementById(elementId);
        if (data.result === "success") {
            const visits = data.response.response.data[0].visits;
            const formattedVisits = visits.toLocaleString();
            element.textContent = formattedVisits;
        } else {
            console.warn("Failed to get visits:", data.error);
            element.textContent = "Error";
        }
    } catch (error) {
        console.error("Error fetching visits:", error);
        document.getElementById(elementId).textContent = "Error";
    }
}

function updateVisits() {
    getVisits(mmpUniverseId, "visitsMMP");
    getVisits(ronnectorUniverseId, "visitsRonnector");
}

updateVisits();
