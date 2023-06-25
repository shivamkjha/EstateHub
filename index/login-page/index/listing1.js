// Generate random house details
const houseDetails = [
    {
      name: "House 1",
      address: "123 Street, City",
      price: "$500,000"
    },
    {
      name: "House 2",
      address: "456 Avenue, Town",
      price: "$700,000"
    },
    {
      name: "House 3",
      address: "789 Road, Village",
      price: "$600,000"
    },
    {
      name: "House 4",
      address: "321 Lane, County",
      price: "$900,000"
    }
  ];
  
  // Get all grid items
  const gridItems = document.querySelectorAll('.grid-item');
  
  // Loop through each grid item and assign random house details
  gridItems.forEach((item, index) => {
    const house = houseDetails[index];
    const houseName = item.querySelector('.house-name');
    const address = item.querySelector('.address');
    const price = item.querySelector('.price');
    
    houseName.textContent = house.name;
    address.textContent = house.address;
    price.textContent = house.price;
  });

  