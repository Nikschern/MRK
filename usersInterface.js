function getUserInterface(
    name,
    date,
    phone,
    email,
    adress,
    sc_name,
    postcode,
    hm_phone,
    eth,
    state
  ) 
  {
    return `
          <div class="information"><p>First name: ${name}</p></div>
          <div class="information"><p>Date ${date}</p></div>
          <div class="information"><p>Numer: ${phone}</p></div>
          <div class="information"><p>Email: ${email}</p></div>
          <div class="information"><p>Adress: ${adress}</p></div>
          <button>Delete</button>
          `;
  }
  