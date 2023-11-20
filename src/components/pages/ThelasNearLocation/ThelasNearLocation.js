import React from 'react';

const ThelasNearLocation = () => {
  // Sample data for thelas near the location
  const thelas = [
    { name: 'Street Tacos Vendor', cuisine: 'Mexican', rating: '★★★★☆' },
    { name: 'Masala Chaat Cart', cuisine: 'Indian', rating: '★★★☆☆' },
    // Add more thela data
  ];

  return (
    <div>
      <header>
        <h1>Thelas Near [Location Name]</h1>
      </header>
      <main>
        {/* Display a list of thelas near the location */}
        <ul>
          {thelas.map((thela, index) => (
            <li key={index}>
              <h2>{thela.name}</h2>
              <p>Cuisine: {thela.cuisine}</p>
              <p>Rating: {thela.rating}</p>
              {/* Add more thela details here */}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default ThelasNearLocation;
