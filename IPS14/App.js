import React from "react";


const DisplayImages = () => {
  return (
    <div>
      <h2>Images in React</h2>
      
      <img
        src="/Images/Vellore_Institute_of_Technology_seal_2017.svg.png"
        alt="VIT Logo"
        width="150"
      />
    </div>
  );
};


const LoginForm = () => {
  return (
    <div>
      <h2>Novell Services Login</h2>
      <form>
        <label>
          Username: <input type="text" />
        </label>
        <br />
        <label>
          Password: <input type="password" />
        </label>
        <br />
        <label>
          City of Employment: <input type="text" />
        </label>
        <br />
        <label>
          Web Server:
          <select>
            <option>Choose a server</option>
            <option>Server 1</option>
            <option>Server 2</option>
          </select>
        </label>
        <br />
        <label>
          Role:
          <input type="radio" name="role" value="admin" /> Admin
          <input type="radio" name="role" value="engineer" /> Engineer
        </label>
        <br />
        <label>
          Single Sign-on:
          <input type="checkbox" /> Mail
          <input type="checkbox" /> Payroll
        </label>
        <br />
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
};



const ProfileImage = () => (
  <img
    src="/Images/Vellore_Institute_of_Technology_seal_2017.svg.png"
    alt="Profile"
    width="100"
  />
);

const UserInfo = () => {
  return (
    <div>
      <h3>User Info</h3>
      <p>Name: Swayam Nayak</p>
      <p>Email: swayam@nayak.com</p>
      <p>Bio: React Developer</p>
    </div>
  );
};

const UserPosts = () => {
  const posts = [
    "React is awesome!",
    "Learning React Hooks",
    "React Router is cool!",
  ];
  return (
    <div>
      <h3>User Posts</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

const ProfilePage = () => {
  return (
    <div>
      <ProfileImage />
      <UserInfo />
      <UserPosts />
    </div>
  );
};


export default function App() {
  return (
    <div>
      <DisplayImages />
      <LoginForm />
      <ProfilePage />
    </div>
  );
}
