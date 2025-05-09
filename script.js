document
  .getElementById("orderForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitButton = this.querySelector("button[type='submit']");

    if (submitButton.disabled) return;

    submitButton.disabled = true;
    submitButton.textContent = "Đang xử lý...";

    const formData = new FormData(this);
    const data = {
      name: formData.get("name"),
      address: formData.get("address"),
      phone: formData.get("phone"),
      product: formData.getAll("product"),
      province: getSelectName("province"),
      district: getSelectName("district"),
      ward: getSelectName("ward"),
      productId: "1512424kTKKyF",
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxT324BtuIFjDNq7dSqI_QVRZiOv6jNWW32xQJx1W5PrNzxJpae8g3Nj8_-pFkjw2HNgQ/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );
      const result = await response.json();
      console.log(result);
      if (result.result === "success") {
        window.location.href = "success.html";
        this.reset();
      } else {
        alert("Có lỗi: " + result.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "ĐẶT HÀNG";
    }
  });

function getSelectName(selectId) {
  const select = document.getElementById(selectId);
  const selectedOption = select.options[select.selectedIndex];
  return selectedOption ? selectedOption.textContent : "";
}
