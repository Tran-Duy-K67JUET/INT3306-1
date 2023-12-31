// JavaScript trong master-scripts.js
function grantStaffAccount() {
    // Lấy giá trị từ các trường nhập liệu
    const employeeName = document.getElementById('employeeName').value;
    const employeeUsername = document.getElementById('employeeUsername').value;
    const employeePassword = document.getElementById('employeePassword').value;
    const employeeEmail = document.getElementById('employeeEmail').value;

    // Tạo một đối tượng nhân viên
    const employee = {
        id: generateEmployeeId(), // Hàm này cần được triển khai để tạo ID duy nhất
        name: employeeName,
        username: employeeUsername,
        password: employeePassword,
        email: employeeEmail,
    };

    // Hiển thị thông tin nhân viên trong bảng
    displayEmployee(employee);
}

// Quản lý nhân viên điểm tập kết
function generateEmployeeId() {
    // Hàm này có thể triển khai để tạo ID nhân viên duy nhất
    // Ví dụ: sử dụng timestamp, số ngẫu nhiên, hoặc logic phức tạp hơn
    return Date.now().toString();
}

function displayEmployee(employee) {
    // Hiển thị thông tin nhân viên trong bảng
    const employeeList = document.getElementById('employeeList');
    const newRow = employeeList.insertRow();
    
    newRow.innerHTML = `
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.username}</td>
        <td>${employee.password}</td>
        <td>${employee.email}</td>
    `;
}

// Thống kê hàng đi, đến
function viewParcelStatistics() {
    // Lấy giá trị từ các trường nhập liệu
    const shipmentType = document.getElementById('shipmentType').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    // Gọi hàm thực hiện thống kê
    const statisticsData = performParcelStatistics(shipmentType, startDate, endDate);

    // Hiển thị kết quả trong bảng
    displayParcelStatistics(statisticsData);
}

function performParcelStatistics(shipmentType, startDate, endDate) {
    // Đây là nơi triển khai logic thống kê dựa trên loại hàng, ngày bắt đầu và ngày kết thúc
    // Trả về một mảng hoặc đối tượng chứa dữ liệu thống kê
    // Ví dụ: const statisticsData = { parcels: [], total: 0, ... };

    // Trong ví dụ này, tạo dữ liệu giả định
    const statisticsData = [
        { id: '1', date: '2023-01-01', type: 'outgoing', status: 'delivered' },
        { id: '2', date: '2023-01-02', type: 'incoming', status: 'undelivered' },
        // Thêm các dòng dữ liệu khác
    ];

    return statisticsData;
}

function displayParcelStatistics(statisticsData) {
    // Hiển thị dữ liệu thống kê trong bảng
    const statisticsList = document.getElementById('statisticsList');
    statisticsList.innerHTML = '';

    statisticsData.forEach(parcel => {
        const newRow = statisticsList.insertRow();

        newRow.innerHTML = `
            <td>${parcel.id}</td>
            <td>${parcel.date}</td>
            <td>${parcel.type === 'outgoing' ? 'Hàng Đi' : 'Hàng Đến'}</td>
            <td>${parcel.status === 'delivered' ? 'Đã Giao' : 'Không Giao'}</td>
            <!-- Thêm các cột khác của dữ liệu thống kê -->
        `;
    });
}
