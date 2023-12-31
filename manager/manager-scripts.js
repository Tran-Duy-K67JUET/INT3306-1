// Cấp tài khoản cho giao dịch viên tại điểm giao dịch
function grantAccount() {
    document.getElementById('content').innerHTML = `
        <h2>Cấp Tài Khoản Giao Dịch Viên</h2>

        <label for="employeeName">Tên Giao Dịch Viên:</label>
        <input type="text" id="employeeName" required>

        <label for="employeeEmail">Email:</label>
        <input type="email" id="employeeEmail" required>

        <button onclick="createAccount()">Cấp Tài Khoản</button>
    `;
}

function createAccount() {
    const employeeName = document.getElementById('employeeName').value;
    const employeeEmail = document.getElementById('employeeEmail').value;

    // Perform logic to create an account for the employee (e.g., send to server)
    // For simplicity, let's just show a message
    alert(`Đã cấp tài khoản cho ${employeeName} (${employeeEmail}).`);

    // You can add additional logic here, such as sending data to the server
}


// Thống kê hàng gửi, hàng nhận tại điểm giao dịch
function viewLocalStatistics() {
    document.getElementById('content').innerHTML = `
        <h2>Thống kê Hàng Gửi, Hàng Nhận tại Điểm Giao Dịch</h2>
        
        <!-- Add your local statistics content here -->
        <button onclick="fetchAndDisplayStatistics()">Xem Thống Kê</button>
        <div id="localStatistics"></div>
    `;
}

function fetchAndDisplayStatistics() {
    // Perform logic to fetch statistics data from the server
    // For simplicity, let's just show a message
    const statisticsData = {
        sent: 150,
        received: 120
    };

    const localStatistics = document.getElementById('localStatistics');
    localStatistics.innerHTML = `
        <p>Số lượng Hàng Gửi: ${statisticsData.sent}</p>
        <p>Số lượng Hàng Nhận: ${statisticsData.received}</p>
        <!-- Add more detailed statistics as needed -->
    `;
}
