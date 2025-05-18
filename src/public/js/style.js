(function ($) {
  "use strict"; 
  $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    }

    updateLogoSize();
  });

  $(window).resize(function () {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    }

    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $('.sidebar .collapse').collapse('hide');
    }

    updateLogoSize();
  });

  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  $(document).on('scroll', function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  $(document).on('click', 'a.scroll-to-top', function (e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

  function updateLogoSize() {
    if ($(".sidebar").hasClass("toggled")) {
      $(".sidebar .sidebar-brand-icon img").css({
        "height": "30px", 
        "transition": "all 0.3s ease" 
      });
    } else {
      $(".sidebar .sidebar-brand-icon img").css({
        "height": "40px" 
      });
    }
  }

  $(document).ready(function () {
    updateLogoSize();
  });

})(jQuery); 

document.getElementById('addLanguageCertificate').addEventListener('click', function () {
  let container = document.getElementById('language-certificates');
  let newEntry = document.createElement('div');
  newEntry.classList.add('certificate-entry', 'row', 'mt-3');
  newEntry.innerHTML = `
      <div class="col-md-3">
          <input type="text" class="form-control" name="language_certificate_name[]" placeholder="VD: IELTS, TOEIC, HSK5" required>
      </div>
      <div class="col-md-2">
          <input type="number" class="form-control" name="language_certificate_score[]" placeholder="Nhập điểm" required>
      </div>
      <div class="col-md-2">
          <input type="date" class="form-control" name="language_certificate_issue_date[]" required>
      </div>
      <div class="col-md-2">
          <input type="date" class="form-control" name="language_certificate_expiry_date[]">
      </div>
      <div class="col-md-2">
          <input type="file" class="form-control-file" name="language_certificate_file[]" accept=".pdf">
      </div>
      <div class="col-md-1 text-right mt-4">
          <button type="button" class="btn btn-danger btn-sm remove-certificate">
              <i class="fas fa-trash-alt"></i>
          </button>
      </div>
  `;

  container.appendChild(newEntry);

  newEntry.querySelector('.remove-certificate').addEventListener('click', function () {
      container.removeChild(newEntry);
  });
});

document.getElementById('addCrewCertificate').addEventListener('click', function () {
  let container = document.getElementById('crew-certificates');
  let newEntry = document.createElement('div');
  newEntry.classList.add('certificate-entry', 'row', 'mt-3');
  newEntry.innerHTML = `
      <div class="col-md-4">
          <input type="text" class="form-control" name="crew_certificate_name[]" placeholder="VD: Chứng chỉ thuyền trưởng" required>
      </div>
      <div class="col-md-3">
          <input type="text" class="form-control" name="crew_certificate_number[]" placeholder="Nhập số chứng chỉ" required>
      </div>
      <div class="col-md-2">
          <input type="date" class="form-control" name="crew_certificate_issue_date[]" required>
      </div>
      <div class="col-md-2">
          <input type="date" class="form-control" name="crew_certificate_expiry_date[]">
      </div>
      <div class="col-md-4 mt-2">
          <input type="text" class="form-control" name="crew_certificate_issuer[]" placeholder="VD: Cục Hàng Hải">
      </div>
      <div class="col-md-4 mt-2">
          <input type="text" class="form-control" name="crew_certificate_standard[]" placeholder="VD: STCW">
      </div>
      <div class="col-md-3 mt-2">
          <input type="file" class="form-control-file" name="crew_certificate_file[]" accept=".pdf">
      </div>
      <div class="col-md-1 text-right mt-4">
          <button type="button" class="btn btn-danger btn-sm remove-certificate">
              <i class="fas fa-trash-alt"></i>
          </button>
      </div>
  `;

  container.appendChild(newEntry);

  newEntry.querySelector('.remove-certificate').addEventListener('click', function () {
      container.removeChild(newEntry);
  });
});

function searchCertificate() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchCertificate");
    filter = input.value.toUpperCase();
    table = document.getElementById("certificateTable");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0]; // Cột "Tên chứng chỉ"
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function filterByMonth() {
  let selectedMonth = document.getElementById("filterMonth").value;
  let rows = document.querySelectorAll("#salaryTable tr");

  rows.forEach(row => {
      row.style.display = (row.getAttribute("data-month") === selectedMonth) ? "" : "none";
  });
}

function chonTatCa(checkbox) {
  let checkboxes = document.querySelectorAll(".row-checkbox");
  checkboxes.forEach(cb => cb.checked = checkbox.checked);
}

function chonDong(row, event) {
  // Nếu click vào nút hoặc input thì bỏ qua
  if (event.target.tagName === 'BUTTON' || event.target.tagName === 'INPUT') return;
  var checkbox = row.querySelector('.chon');
  checkbox.checked = !checkbox.checked;
}

