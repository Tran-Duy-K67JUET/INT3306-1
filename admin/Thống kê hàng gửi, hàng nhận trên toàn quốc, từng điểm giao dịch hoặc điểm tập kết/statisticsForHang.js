function viewStatistics() {
    document.getElementById('content').innerHTML = `
        <h2>Thống kê Hàng Gửi, Hàng Nhận</h2>

        <select id="locationFilter">
            <option value="toan-quoc">Toàn Quốc</option>
            <option value="dia-diem">Từng Điểm Giao Dịch hoặc Điểm Tập Kết</option>
        </select>

        <div id="statisticsContent"></div>
    `;

    // Add an event listener to the location filter dropdown
    document.getElementById('locationFilter').addEventListener('change', updateStatisticsContent);

    // Initialize statistics content based on the current filter
    updateStatisticsContent();
}

function updateStatisticsContent() {
    const locationFilter = document.getElementById('locationFilter').value;
    const statisticsContent = document.getElementById('statisticsContent');

    if (locationFilter === 'toan-quoc') {
        // Display overall national statistics
        statisticsContent.innerHTML = `
            <p>Thống kê Hàng Gửi, Hàng Nhận trên Toàn Quốc:</p>
            <!-- Add your overall statistics content here -->
        `;
    } else if (locationFilter === 'dia-diem') {
        // Display statistics for each location
        statisticsContent.innerHTML = `
            <p>Thống kê Hàng Gửi, Hàng Nhận theo Điểm Giao Dịch hoặc Điểm Tập Kết:</p>
            <select id="specificLocationFilter">
                <!-- Populate options dynamically using JavaScript -->
            </select>
            <button onclick="getSpecificLocationStatistics()">Xem Thống Kê</button>
            <div id="specificLocationStatistics"></div>
        `;

        // Populate the specific locations dropdown dynamically
        const specificLocationsDropdown = document.getElementById('specificLocationFilter');
        // Fetch locations from the server or use a static list
        const specificLocations = ['Điểm Giao Dịch 1', 'Điểm Giao Dịch 2', 'Điểm Tập Kết 1', 'Điểm Tập Kết 2'];

        for (const location of specificLocations) {
            const option = document.createElement('option');
            option.value = location;
            option.text = location;
            specificLocationsDropdown.add(option);
        }
    }
}

function getSpecificLocationStatistics() {
    const specificLocation = document.getElementById('specificLocationFilter').value;
    const specificLocationStatistics = document.getElementById('specificLocationStatistics');

    // Perform logic to get and display statistics for the specific location
    // For simplicity, let's just show a message
    specificLocationStatistics.innerHTML = `
        <p>Thống kê Hàng Gửi, Hàng Nhận cho ${specificLocation}:</p>
        <!-- Add your specific location statistics content here -->
    `;
}
