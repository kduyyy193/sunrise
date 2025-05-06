document
  .getElementById("orderForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      product: formData.get("product"),
      province: formData.get("province"),
      district: formData.get("district"),
      ward: formData.get("ward"),
      apiKey: "1512424kTKKyF",
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyXMC0rWKlKNf-zA-dNdjc-yfCHvGS0VvPUzXD-TS57qDn8nzSZSlGKCz9ZyHFHqzdJbA/exec",
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
        alert("Đặt hàng thành công! Dữ liệu đã được lưu.");
        this.reset();
      } else {
        alert("Có lỗi: " + result.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Có lỗi xảy ra. Vui lòng thử lại.");
      k;
    }
  });
