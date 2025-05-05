// Cấu hình font mặc định cho biểu đồ
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Hàm định dạng số
function number_format(number, decimals, dec_point, thousands_sep) {
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? '.' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? ',' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Lấy phần tử canvas
var ctx = document.getElementById("myBarChart");

// Biểu đồ cột hiển thị số lượng thuyền viên theo chức danh
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Thuyền trưởng", "Máy trưởng", "Thuyền phó", "Máy phó", "Thủy thủ", "Kỹ thuật viên"],
    datasets: [{
      label: "Số lượng thuyền viên",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: [5, 7, 10, 8, 20, 12], // Dữ liệu số lượng thuyền viên theo chức danh
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 40, // Độ dày cột tối đa
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 25, // Giới hạn tối đa để phù hợp với dữ liệu
          stepSize: 5,
          maxTicksLimit: 5,
          padding: 10,
          callback: function(value, index, values) {
            return number_format(value) + " người"; // Thêm đơn vị "người"
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: true
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel) + " người";
        }
      }
    },
  }
});
