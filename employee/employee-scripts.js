// JavaScript trong employee-scripts.js

// Hàm xác nhận hàng đi từ điểm giao dịch chuyển đến
function confirmOutgoingParcel() {
    const parcelId = document.getElementById('confirmOutgoingParcelId').value;
    // Gọi API hoặc thực hiện các hành động cần thiết để xác nhận đơn hàng đi
    console.log(`Xác nhận đơn hàng đi có ID ${parcelId}`);
}

// Hàm tạo đơn chuyển hàng đến điểm tập kết đích
function createIncomingParcel() {
    const parcelId = document.getElementById('createIncomingParcelId').value;
    const destinationBranch = document.getElementById('destinationBranch').value;
    // Gọi API hoặc thực hiện các hành động cần thiết để tạo đơn hàng đến
    console.log(`Tạo đơn chuyển hàng đến với ID ${parcelId} đến ${destinationBranch}`);
}

// Hàm xác nhận hàng nhận từ điểm tập kết khác
function confirmIncomingParcel() {
    const parcelId = document.getElementById('confirmIncomingParcelId').value;
    // Gọi API hoặc thực hiện các hành động cần thiết để xác nhận đơn hàng nhận
    console.log(`Xác nhận đơn hàng nhận có ID ${parcelId}`);
}

// Hàm tạo đơn chuyển hàng đến điểm giao dịch đích
function createOutgoingParcel() {
    const parcelId = document.getElementById('createOutgoingParcelId').value;
    const destinationBranch = document.getElementById('destinationBranch').value;
    // Gọi API hoặc thực hiện các hành động cần thiết để tạo đơn hàng đi
    console.log(`Tạo đơn chuyển hàng đi với ID ${parcelId} đến ${destinationBranch}`);
}
