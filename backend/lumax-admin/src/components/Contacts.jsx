import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Contacts.css";
import axios from "axios";

function Contacts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch contacts when the component mounts
    async function fetchContacts() {
      try {
        const response = await axios.get("http://localhost:3000/contact");
        setPosts(response.data);
        console.log(posts);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }
    fetchContacts();
  }, []);
  return (
    <div>
      <Header />
      <div className="grids1">
        {posts
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((post) => (
            <div className="stylish-box">
              <div className="edit">
                {" "}
                <div>
                  <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" />
                </div>
                <div>
                  {" "}
                  <div>{post.name}</div>
                  <div>{post.email}</div>
                  <div>{post.phone}</div>
                </div>
              </div>
              <div className="info">
                <div>{post.dropdown}</div>
                <div>{post.area}</div>
                <div>{post.comments}</div>
              </div>
              <div className="manipulate">
                <button>Add</button>
                <button>Remove</button>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
