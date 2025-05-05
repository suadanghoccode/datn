$(document).ready(function () {
    $('#dataTable').DataTable({
        language: {
            lengthMenu: "Hiển thị _MENU_ mục mỗi trang",
            zeroRecords: "Không tìm thấy dữ liệu",
            info: "Hiển thị _START_ đến _END_ của _TOTAL_ mục",
            infoEmpty: "Không có dữ liệu",
            infoFiltered: "(được lọc từ tổng số _MAX_ mục)",
            search: "Tìm kiếm:",
            paginate: {
                first: "Đầu",
                last: "Cuối",
                next: "Tiếp",
                previous: "Trước"
            }
        }
    });
});