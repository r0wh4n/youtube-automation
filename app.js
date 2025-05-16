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
    "Views": 1050,
    "Likes": 100,
    "Comments": 22,
    "Subscribers": 204,
    "Upload Date": "2024-05-01",
    "Duration": "10:15"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=xyz789",
    "Title": "Mock Video 2",
    "Views": 5000,
    "Likes": 353,
    "Comments": 64,
    "Subscribers": 850,
    "Upload Date": "2024-04-20",
    "Duration": "8:30"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=abc123",
    "Title": "Mock Video 3",
    "Views": 1020,
    "Likes": 100,
    "Comments": 25,
    "Subscribers": 200,
    "Upload Date": "2024-05-01",
    "Duration": "10:15"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=xyz789",
    "Title": "Mock Video 4",
    "Views": 5060,
    "Likes": 340,
    "Comments": 62,
    "Subscribers": 805,
    "Upload Date": "2024-04-20",
    "Duration": "8:30"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=abc123",
    "Title": "Mock Video 5",
    "Views": 1300,
    "Likes": 120,
    "Comments": 254,
    "Subscribers": 206,
    "Upload Date": "2024-05-01",
    "Duration": "10:15"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=xyz789",
    "Title": "Mock Video 6",
    "Views": 5030,
    "Likes": 310,
    "Comments": 63,
    "Subscribers": 840,
    "Upload Date": "2024-04-20",
    "Duration": "8:30"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=abc123",
    "Title": "Mock Video 7",
    "Views": 1040,
    "Likes": 200,
    "Comments": 22,
    "Subscribers": 230,
    "Upload Date": "2024-05-01",
    "Duration": "10:15"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=xyz789",
    "Title": "Mock Video 8",
    "Views": 5400,
    "Likes": 351,
    "Comments": 62,
    "Subscribers": 820,
    "Upload Date": "2024-04-20",
    "Duration": "8:30"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=abc123",
    "Title": "Mock Video 9",
    "Views": 1023,
    "Likes": 130,
    "Comments": 2523,
    "Subscribers": 220,
    "Upload Date": "2024-05-01",
    "Duration": "10:15"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=xyz789",
    "Title": "Mock Video 10",
    "Views": 3000,
    "Likes": 250,
    "Comments": 20,
    "Subscribers": 810,
    "Upload Date": "2024-04-20",
    "Duration": "8:30"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=abc123",
    "Title": "Mock Video 11",
    "Views": 1030,
    "Likes": 110,
    "Comments": 25,
    "Subscribers": 220,
    "Upload Date": "2024-05-01",
    "Duration": "10:15"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=xyz789",
    "Title": "Mock Video 12",
    "Views": 5300,
    "Likes": 340,
    "Comments": 64,
    "Subscribers": 804,
    "Upload Date": "2024-04-20",
    "Duration": "8:30"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=abc123",
    "Title": "Mock Video 13",
    "Views": 1200,
    "Likes": 200,
    "Comments": 35,
    "Subscribers": 230,
    "Upload Date": "2024-05-01",
    "Duration": "10:15"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=xyz789",
    "Title": "Mock Video 14",
    "Views": 5200,
    "Likes": 353,
    "Comments": 40,
    "Subscribers": 840,
    "Upload Date": "2024-04-20",
    "Duration": "8:30"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=abc123",
    "Title": "Mock Video 15",
    "Views": 1402,
    "Likes": 140,
    "Comments": 35,
    "Subscribers": 220,
    "Upload Date": "2024-05-01",
    "Duration": "10:15"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=xyz789",
    "Title": "Mock Video 16",
    "Views": 5040,
    "Likes": 340,
    "Comments": 64,
    "Subscribers": 820,
    "Upload Date": "2024-04-20",
    "Duration": "8:30"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=abc123",
    "Title": "Mock Video 17",
    "Views": 1010,
    "Likes": 102,
    "Comments": 25,
    "Subscribers": 220,
    "Upload Date": "2024-05-01",
    "Duration": "10:15"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=xyz789",
    "Title": "Mock Video 18",
    "Views": 5420,
    "Likes": 320,
    "Comments": 64,
    "Subscribers": 810,
    "Upload Date": "2024-04-20",
    "Duration": "8:30"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=abc123",
    "Title": "Mock Video 19",
    "Views": 1004,
    "Likes": 120,
    "Comments": 21,
    "Subscribers": 230,
    "Upload Date": "2024-05-01",
    "Duration": "10:15"
  },
  {
    "Video Url": "https://www.youtube.com/watch?v=xyz789",
    "Title": "Mock Video 20",
    "Views": 5000,
    "Likes": 450,
    "Comments": 64,
    "Subscribers": 200,
    "Upload Date": "2024-04-20",
    "Duration": "8:30"
  }
];

let currentData = [...videoData]; // this will always be the data currently shown (sorted/filtered)
let currentPage = 1;
const rowsPerPage = 10;

// --- Main Table Rendering with Pagination ---
function refreshTableWithPagination() {
  const tableBody = document.getElementById('video-table-body');
  tableBody.innerHTML = '';

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedData = currentData.slice(start, end);

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
      <td>${row['Duration']}</td>
    `;
    tableBody.appendChild(tr);
  });

  renderPagination();
}

function renderPagination() {
  const pageCount = Math.ceil(currentData.length / rowsPerPage);
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  // Only render numbered page buttons (no Previous/Next)
  for (let i = 1; i <= pageCount; i++) {
    const li = document.createElement('li');
    li.className = 'page-item' + (i === currentPage ? ' active' : '');
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    li.onclick = (e) => {
      e.preventDefault();
      currentPage = i;
      refreshTableWithPagination();
    };
    pagination.appendChild(li);
  }
}

function sortBySubscribers() {
  currentData = [...videoData].sort((a, b) => b.Subscribers - a.Subscribers);
  currentPage = 1;
  refreshTableWithPagination();
}
function sortByViews() {
  currentData = [...videoData].sort((a, b) => b.Views - a.Views);
  currentPage = 1;
  refreshTableWithPagination();
}
function sortByLikes() {
  currentData = [...videoData].sort((a, b) => b.Likes - a.Likes);
  currentPage = 1;
  refreshTableWithPagination();
}
function sortByComments() {
  currentData = [...videoData].sort((a, b) => b.Comments - a.Comments);
  currentPage = 1;
  refreshTableWithPagination();
}


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('sort-subscribers').onclick = sortBySubscribers;
  document.getElementById('sort-views').onclick = sortByViews;
  document.getElementById('sort-likes').onclick = sortByLikes;
  document.getElementById('sort-comments').onclick = sortByComments;

  // On load, show all data
  currentData = [...videoData];
  currentPage = 1;
  refreshTableWithPagination();
});

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