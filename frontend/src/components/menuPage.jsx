import React from "react";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/"); // Navigate back to the home page
  };

  return (
    <div className="menuPage">
      <div className="menuPageContent">
        <div className="row">
          <div className="col-12">
            <h1 className="menu-section-heading">Explore Menu</h1>
          </div>
          {[
            {
              title: "Soups",
              image: "https://i.pinimg.com/736x/ed/67/9d/ed679d07242e7fbea26db6478e632533.jpg",
            },
            {
              title: "Main Course",
              image: "https://i.pinimg.com/736x/2b/64/e1/2b64e15ac11687bb3074b9f7abc87edd.jpg",
            },
            {
              title: "Fish & Sea food",
              image: "https://i.pinimg.com/736x/4b/83/68/4b83688b9129198eb9bb7eb23c888e5f.jpg",
            },
            {
              title: "Veg Starters",
              image: "https://i.pinimg.com/736x/f4/71/73/f471735fa5564f9994437200410aaf5e.jpg",
            },
            {
              title: "Breads",
              image: "https://i.pinimg.com/736x/91/0d/dd/910dddbbd0808d9bb699f56d5253fb9a.jpg",
            },
            {
              title: "Snacks",
              image: "https://i.pinimg.com/736x/5d/5c/e0/5d5ce0cef66e5a5682e007dce04a2667.jpg",
            },
            {
              title: "Burgers",
              image: "https://i.pinimg.com/736x/3b/6c/c6/3b6cc651e4cd1cbc7fa7d559a5b81810.jpg",
            },
            {
              title: "Sandwiches",
              image: "https://i.pinimg.com/736x/8a/a9/9f/8aa99f7977538a21fe72a987bf2ed383.jpg",
            },
            {
              title: "Cookies",
              image: "https://i.pinimg.com/736x/d8/e2/8d/d8e28d0eb0ca8c61eca9de3fb58df7f2.jpg",
            },
            {
              title: "Cheese Cakes",
              image: "https://i.pinimg.com/736x/f6/96/61/f69661451863c327ea54181cc1af3eff.jpg",
            },
            {
              title: "Desserts",
              image: "https://i.pinimg.com/736x/70/44/96/704496fe5a89a0e082560550b17ac434.jpg",
            },
            {
              title: "IceCreams",
              image: "https://i.pinimg.com/736x/8f/04/08/8f040878ff990436bc5a1674d307719b.jpg",
            },
            {
              title: "IceCream Shakes",
              image: "https://i.pinimg.com/736x/57/62/f0/5762f0d20af785a27d0f01da2c2975b9.jpg",
            },
            {
              title: "Milkshakes",
              image: "https://i.pinimg.com/736x/18/53/8f/18538f53113d91aa614b7db0bba50a06.jpg",
            },
            {
              title: "Rainbow Shakes",
              image: "https://i.pinimg.com/736x/a6/2e/77/a62e77f2b43a5784d5b49b427f278c83.jpg",
            },
            {
              title: "Thickshakes",
              image: "https://i.pinimg.com/736x/21/3f/06/213f06f7cf4cbb8649e2493afe4e7932.jpg",
            },
          ].map((menuItem, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div className="menu-item-card shadow p-3 mb-3">
                <img
                  src={menuItem.image}
                  className="menu-item-image w-100"
                  alt={menuItem.title}
                />
                <h1 className="menu-card-title">{menuItem.title}</h1>
              </div>
            </div>
          ))}
        </div>
        <button onClick={goToHome} className="backToHomeBtn">
          Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default MenuPage;