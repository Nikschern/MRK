class User {
    constructor(
      name,
      date,
      phone,
      email,
      adress,
      sc_name,
      postcode,
      hm_phone,
      eth,
      state,
        callback,
        main
      
    ) {
      index++;
      this.name = name;
      this.date = date;
      this.phone = phone;
      this.email = email; 
      this.adress = adress;
      this.sc_name = sc_name;
      this.postcode = postcode;
      this.hm_phone = hm_phone;
      this.eth = eth;
      this.state = state;
      this.callback = callback;  
      this.interface = getUserInterface(
        this.name,
        this.date,
        this.phone,
        this.email,
        this.adress,
        this.sc_name,
        this.postcode,
        this.hm_phone,
        this.eth,
        this.state
      );
      this.render(main);
      this.button = document.getElementById(this.id).querySelector("button");
      this.button.addEventListener('click', this.delete.bind(this));
    
    }
  
  
    delete() {
      if (this.callback(this.id)) {
        container.removeChild(this.elem)
        alert('Delete')
      }
    }
  
    render(main) {
      this.elem = document.createElement("div");
      this.elem.id = this.id;
      this.elem.innerHTML = this.interface;
      container.appendChild(this.elem);
   }
  }
  
  let index = 0;
  