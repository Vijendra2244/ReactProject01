import React, { useState } from "react";
import  "./Fetch.css"

function FetchUserInfo() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      let res = await fetch(`https://randomuser.me/api/`);
      let data = await res.json();
      setUser(data.results[0]);
    } catch (error) {
      console.log(error, "error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="appContainer">
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <>
            {user && (
              <div className="userInfo">
                <img src={user.picture.large} alt="" />
                <p>
                  {user.name.first} {user.name.last}
                </p>
              </div>
            )}
          </>
        )}
      </div>
      <button onClick={fetchData}>Get Fake User Info</button>
    </>
  );
}

export default FetchUserInfo;
