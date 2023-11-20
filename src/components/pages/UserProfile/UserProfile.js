import React from 'react';

const UserProfile = () => {
  // Sample user data
  const user = {
    username: 'foodlover123',
    fullName: 'John Foodie',
    email: 'john.foodie@example.com',
    // Add more user information as needed
  };

  return (
    <div>
      <header>
        <h1>User Profile: {user.username}</h1>
      </header>
      <main>
        <h2>User Information</h2>
        <ul>
          <li>Username: {user.username}</li>
          <li>Full Name: {user.fullName}</li>
          <li>Email: {user.email}</li>
        </ul>
        <h2>User Reviews</h2>
        <ul>
          <li>
            <strong>Restaurant Name 1</strong>
            <p>Rating: ★★★★☆</p>
            <p>Review: Enjoyed the food here!</p>
          </li>
          <li>
            <strong>Restaurant Name 2</strong>
            <p>Rating: ★★★☆☆☆</p>
            <p>Review: Service could be better.</p>
          </li>
        </ul>
        <button>Edit Profile</button>
      </main>
    </div>
  );
};

export default UserProfile;
