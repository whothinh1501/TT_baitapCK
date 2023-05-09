
document.getElementById("menu").addEventListener("click", function() {
  window.location.href = "https://kfcvietnam.com.vn/menu";
});
document.getElementById("promotion").addEventListener("click", function() {
  window.location.href = "https://kfcvietnam.com.vn/menu/hot-deal";
});
document.getElementById("stores").addEventListener("click", function() {
  window.location.href = "https://kfcvietnam.com.vn/he-thong-nha-hang-kfc";
});

// document.getElementById("myButton").addEventListener("click", function() {
//   window.location.href = "https://kfcvietnam.com.vn/store-selection";
// });

document.getElementById("sign_in").addEventListener("click", function() {
  window.location.href = "cart.html";
});

function goToNewPage() {
  window.location.href = 'deliverypage.html';

// Lấy tham chiếu đến icon Signin và Modal đăng nhập
const signinIcon = document.getElementById("sign_in");
const signinModal = document.getElementById("signin-modal");

// Thêm lắng nghe sự kiện click cho icon Signin
signinIcon.addEventListener("click", function() {
signinModal.style.display = "block"; // Hiển thị Modal khi click vào icon Signin
});

// Thêm lắng nghe sự kiện click cho nút đóng Modal
const closeBtn = signinModal.querySelector(".close");
closeBtn.addEventListener("click", function() {
signinModal.style.display = "none"; // Ẩn Modal khi click vào nút đóng
});
