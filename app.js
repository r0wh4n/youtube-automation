let videoData = []; // Store data globally

function sendWebhook() {
    const data = document.getElementById('inputData').value;
  
    fetch('https://primary-production-482c.up.railway.app/webhook-test/youtube', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('Rohan:8750#@')
      },
      body: JSON.stringify({ message: data })
    })
    .then(response => response.text())
    .then(result => {
      document.getElementById('response').innerText = "Response: " + result;
    })
    .catch(error => {
      document.getElementById('response').innerText = "Error: " + error;
    });
  }

// Replace with your actual Web App URL
const GOOGLE_SHEET_API_URL = "https://script.google.com/macros/s/AKfycbxPcf9_LmAx9pTJNWedodh2243XXpwRYlPHHjUg8ESrpAxzFa1Zq2yGz1dj-NTPf5qopg/exec";

async function fetchSheetData() {
  try {
    const response = await fetch(GOOGLE_SHEET_API_URL);
    if (!response.ok) throw new Error('Network error');
    
    videoData = await response.json();
    refreshTable(videoData);
  } catch (error) {
    console.error('Fetch error:', error);
    document.getElementById('response').innerText = "Error loading data";
  }
}

function refreshTable(data) {
  const tableBody = document.getElementById('video-table-body');
  tableBody.innerHTML = '';

  data.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input type="checkbox"></td>
      <td>
        <a href="${row['Video Url']}" target="_blank" style="text-decoration: none; color: #fff">
          <img src="https://i.ytimg.com/vi/${extractVideoId(row['Video Url'])}/hqdefault.jpg" class="video-thumb" alt="">
          <span>${row['Title']}</span>
        </a>
      </td>
      <td style="color:#00ff99;">${row['Views']}</td>
      <td style="color:#ff6666;">${row['Likes']}</td>
      <td>${row['Comments']}</td>
      <td>${row['Subscribers']}</td>
      <td>${formatDate(row['Upload Date'])}</td>
      <td>${(row['Duration'])}</td>
    `;
    tableBody.appendChild(tr);
  });
}

function sortBySubscribers() {
  const sorted = [...videoData].sort((a, b) => b.Subscribers - a.Subscribers);
  refreshTable(sorted);
}

function sortByViews() {
  const sorted = [...videoData].sort((a, b) => b.Views - a.Views);
  refreshTable(sorted);
}

function sortByLikes() {
  const sorted = [...videoData].sort((a, b) => b.Likes - a.Likes);
  refreshTable(sorted);
}

// Button event listeners
document.addEventListener('DOMContentLoaded', () => {
  // First button group (sorting buttons)
  document.querySelectorAll('.button-group:first-child button').forEach((btn, index) => {
    btn.onclick = [sortBySubscribers, sortByViews, sortByLikes][index];
  });

  // Second button group (select/deselect)
  document.querySelectorAll('.button-group:nth-child(3) button').forEach((btn, index) => {
    btn.onclick = index === 0 ? selectAll : deselectAll;
  });
});

function selectAll() {
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.checked = true;
  });
}

function deselectAll() {
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.checked = false;
  });
}

  function formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date)) return dateStr;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  function extractVideoId(url) {
    if (!url) return '';
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : '';
  }

// Initialize
window.onload = fetchSheetData;
