let customers = document.querySelector(".content");

async function fetchCustomers(url) {
  try {
    let data = await fetch(url);
    let response = await data.json();
    for (let i = 0; i < response.length; i++) {
      let name = response[i].name;
      let email = response[i].email;
      let phone = response[i].phone;
      let address = response[i].address;

      customers.innerHTML += `
        <div class="card">
          <div class="card-content">
            <div class="image">
              <img src="img/${name}.png" alt="" />
            </div>
            <div class="name-profession">
              <span class="name">${name}</span>
              <span class="profession">${address}</span>
            </div>
            <div class="media-icons">
              <a href="mailto:${email}"><i class='bx bx-envelope'></i></a>
              <a href="tel:${phone}"><i class='bx bx-phone'></i></a>
              <i class='bx bxl-facebook-circle'></i>
            </div>
            <div class="rating">
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bx-star'></i>
              <i class='bx bx-star'></i>
            </div>
            <div class="button">
              <button class="aboutMe">Дэлгэрэнгүй</button>
              <button class="hireMe">Холбоо барих</button>
            </div>
          </div>
        </div>`;
    }
  } catch (err) {
    console.log(err);
  }
}

fetchCustomers("http://localhost:8080/api/customers");
