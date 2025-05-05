// Cấu hình font mặc định cho biểu đồ
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Lấy phần tử canvas
var ctx = document.getElementById("myPieChart");

// Biểu đồ tròn hiển thị tình trạng hợp đồng
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Hết hiệu lực", "Còn hiệu lực", "Sắp hết hạn"],
    datasets: [{
      data: [15, 60, 25], // Dữ liệu số lượng hợp đồng theo trạng thái
      backgroundColor: ['#003366', '#1cc88a', '#f6c23e'], // Đồng bộ màu với HTML
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#f4b619'], // Màu hover
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var total = dataset.data.reduce((a, b) => a + b, 0);
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = ((currentValue / total) * 100).toFixed(1);
          return data.labels[tooltipItem.index] + ': ' + currentValue + " hợp đồng (" + percentage + "%)";
        }
      }
    },
    legend: {
      display: false // Tắt chú thích trong biểu đồ vì đã có trong HTML
    },
    cutoutPercentage: 70, // Độ rỗng ở giữa
  },
});
