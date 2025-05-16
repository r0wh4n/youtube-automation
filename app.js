let videoData = []; // Store data globally

// Function to send data to a webhook endpoint
function sendWebhook() {
    const data = document.getElementById('inputData').value;

    fetch('https://primary-production-482c.up.railway.app/webhook-test/youtube', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('Rohan:8750#@') // Encode credentials
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

// COMMENTED OUT: This was used to fetch real data from Google Sheets
/*
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
*/

// MOCK DATA FOR DEVELOPMENT
videoData = [
  {
    "Video Url": "https://www.youtube.com/watch?v=abc123",
    "Title": "Mock Video 1",
    "Views": 1000,
    "Likes": 100,
    "Comments": 25,
    "Subscribers": 200,
    "Upload Date": "2024-05-01",
    "Duration": "10:15"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=xyz789",
    "Title": "Mock Video 2",
    "Views": 5000,
    "Likes": 350,
    "Comments": 60,
    "Subscribers": 800,
    "Upload Date": "2024-04-20",
    "Duration": "8:30"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=abc123",
    "Title": "Mock Video 3",
    "Views": 1000,
    "Likes": 100,
    "Comments": 25,
    "Subscribers": 200,
    "Upload Date": "2024-05-01",
    "Duration": "10:15"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=xyz789",
    "Title": "Mock Video 4",
    "Views": 5000,
    "Likes": 350,
    "Comments": 60,
    "Subscribers": 800,
    "Upload Date": "2024-04-20",
    "Duration": "8:30"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=abc123",
    "Title": "Mock Video 5",
    "Views": 1000,
    "Likes": 100,
    "Comments": 25,
    "Subscribers": 200,
    "Upload Date": "2024-05-01",
    "Duration": "10:15"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=xyz789",
    "Title": "Mock Video 6",
    "Views": 5000,
    "Likes": 350,
    "Comments": 60,
    "Subscribers": 800,
    "Upload Date": "2024-04-20",
    "Duration": "8:30"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=abc123",
    "Title": "Mock Video 7",
    "Views": 1000,
    "Likes": 100,
    "Comments": 25,
    "Subscribers": 200,
    "Upload Date": "2024-05-01",
    "Duration": "10:15"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=xyz789",
    "Title": "Mock Video 8",
    "Views": 5000,
    "Likes": 350,
    "Comments": 60,
    "Subscribers": 800,
    "Upload Date": "2024-04-20",
    "Duration": "8:30"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=abc123",
    "Title": "Mock Video 9",
    "Views": 1000,
    "Likes": 100,
    "Comments": 25,
    "Subscribers": 200,
    "Upload Date": "2024-05-01",
    "Duration": "10:15"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=xyz789",
    "Title": "Mock Video 10",
    "Views": 5000,
    "Likes": 350,
    "Comments": 60,
    "Subscribers": 800,
    "Upload Date": "2024-04-20",
    "Duration": "8:30"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=abc123",
    "Title": "Mock Video 11",
    "Views": 1000,
    "Likes": 100,
    "Comments": 25,
    "Subscribers": 200,
    "Upload Date": "2024-05-01",
    "Duration": "10:15"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=xyz789",
    "Title": "Mock Video 12",
    "Views": 5000,
    "Likes": 350,
    "Comments": 60,
    "Subscribers": 800,
    "Upload Date": "2024-04-20",
    "Duration": "8:30"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=abc123",
    "Title": "Mock Video 13",
    "Views": 1000,
    "Likes": 100,
    "Comments": 25,
    "Subscribers": 200,
    "Upload Date": "2024-05-01",
    "Duration": "10:15"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=xyz789",
    "Title": "Mock Video 14",
    "Views": 5000,
    "Likes": 350,
    "Comments": 60,
    "Subscribers": 800,
    "Upload Date": "2024-04-20",
    "Duration": "8:30"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=abc123",
    "Title": "Mock Video 15",
    "Views": 1000,
    "Likes": 100,
    "Comments": 25,
    "Subscribers": 200,
    "Upload Date": "2024-05-01",
    "Duration": "10:15"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=xyz789",
    "Title": "Mock Video 16",
    "Views": 5000,
    "Likes": 350,
    "Comments": 60,
    "Subscribers": 800,
    "Upload Date": "2024-04-20",
    "Duration": "8:30"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=abc123",
    "Title": "Mock Video 17",
    "Views": 1000,
    "Likes": 100,
    "Comments": 25,
    "Subscribers": 200,
    "Upload Date": "2024-05-01",
    "Duration": "10:15"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=xyz789",
    "Title": "Mock Video 18",
    "Views": 5000,
    "Likes": 350,
    "Comments": 60,
    "Subscribers": 800,
    "Upload Date": "2024-04-20",
    "Duration": "8:30"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=abc123",
    "Title": "Mock Video 19",
    "Views": 1000,
    "Likes": 100,
    "Comments": 25,
    "Subscribers": 200,
    "Upload Date": "2024-05-01",
    "Duration": "10:15"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=xyz789",
    "Title": "Mock Video 20",
    "Views": 5000,
    "Likes": 350,
    "Comments": 60,
    "Subscribers": 800,
    "Upload Date": "2024-04-20",
    "Duration": "8:30"
  }
];

let currentPage = 1;
const rowsPerPage = 10;


// Function to render table rows based on provided video data
function refreshTable(data, page = 1, perPage = 10) {
  const tableBody = document.getElementById('video-table-body');
  tableBody.innerHTML = '';

  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginatedData = data.slice(start, end);

  paginatedData.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
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

function renderPagination(data, perPage = 10) {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  const pageCount = Math.ceil(data.length / perPage);

  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement('button');
    btn.innerText = i;
    btn.className = (i === currentPage) ? 'active' : '';
    btn.onclick = () => {
      currentPage = i;
      refreshTable(data, currentPage, perPage);
      renderPagination(data, perPage);
    };
    pagination.appendChild(btn);
  }
}

// Sorting by Subscribers
function sortBySubscribers() {
  const sorted = [...videoData].sort((a, b) => b.Subscribers - a.Subscribers);
  refreshTable(sorted, 1, rowsPerPage);
  renderPagination(sorted, rowsPerPage);
  currentPage = 1;
}
// Sorting by Views
function sortByViews() {
  const sorted = [...videoData].sort((a, b) => b.Views - a.Views);
  refreshTable(sorted);
}

// Sorting by Likes
function sortByLikes() {
  const sorted = [...videoData].sort((a, b) => b.Likes - a.Likes);
  refreshTable(sorted);
}

// Event listeners for buttons
document.addEventListener('DOMContentLoaded', () => {
  // First button group handles sorting
  document.querySelectorAll('.button-group:first-child button').forEach((btn, index) => {
    btn.onclick = [sortBySubscribers, sortByViews, sortByLikes][index];
  });

  // Third button group handles select/deselect checkboxes
  document.querySelectorAll('.button-group:nth-child(3) button').forEach((btn, index) => {
    btn.onclick = index === 0 ? selectAll : deselectAll;
  });

  // Load mock data into table on page load
  refreshTable(videoData);
});

// Format the date in a readable way
function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date)) return dateStr;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Extract YouTube video ID from URL
function extractVideoId(url) {
  if (!url) return '';
  const match = url.match(/v=([^&]+)/);
  return match ? match[1] : '';
}

// COMMENTED OUT: This used to load real data on window load
// window.onload = fetchSheetData;

// INSTEAD, load mock data on page load
window.onload = () => {
  refreshTable(videoData, currentPage, rowsPerPage);
  renderPagination(videoData, rowsPerPage);
};
