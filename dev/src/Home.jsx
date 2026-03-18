import "./App.css";

function Home() {

  const user = JSON.parse(
    localStorage.getItem("loggedUser")
  );

  if (!user) return <h2>No user logged in</h2>;

  // Gender guess from name
  const femaleNames = [
    "mary", "priya", "sita", "laxmi",
    "kavya", "sneha", "pooja", "divya"
  ];

  const firstName =
    user.name.split(" ")[0].toLowerCase();

  const isFemale =
    femaleNames.includes(firstName);

  //  Random avatar
  const randomId = Math.floor(
    Math.random() * 70
  );

  const imageUrl = isFemale
    ? `https://randomuser.me/api/portraits/women/${randomId}.jpg`
    : `https://randomuser.me/api/portraits/men/${randomId}.jpg`;

  return (
    <div className="home-page">

      <h2 className="title">
        Account Settings
      </h2>

      <div className="profile-card">

        <div className="profile-top">

          <div className="avatar-wrapper">
            <img
              src={imageUrl}
              alt="profile"
              className="avatar"
            />

            <div className="camera-icon">
              📷
            </div>
          </div>

          <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>

        </div>

        <p className="about">
          Lorem Ipsum Dolor Sit Amet,
          Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor
          Invidunt Ut Labore Et Dolore
          Magna Aliquyam Erat, Sed Diam
        </p>

      </div>

    </div>
  );
}

export default Home;