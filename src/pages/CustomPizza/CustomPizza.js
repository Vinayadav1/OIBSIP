import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CustomPizza.css";

function CustomPizza() {
  const [bases, setBases] = useState([]);
  const [sauces, setSauces] = useState([]);
  const [cheeses, setCheeses] = useState([]);
  const [veggies, setVeggies] = useState([]);
  const [selectedBase, setSelectedBase] = useState("");
  const [selectedSauce, setSelectedSauce] = useState("");
  const [selectedCheese, setSelectedCheese] = useState("");
  const [selectedVeggies, setSelectedVeggies] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const [baseRes, sauceRes, cheeseRes, veggieRes] = await Promise.all([
          axios.get("/api/inventory/bases"),
          axios.get("/api/inventory/sauces"),
          axios.get("/api/inventory/cheeses"),
          axios.get("/api/inventory/veggies"),
        ]);

        setBases(baseRes.data);
        setSauces(sauceRes.data);
        setCheeses(cheeseRes.data);
        setVeggies(veggieRes.data);
      } catch (error) {
        console.error("Error fetching inventory data", error);
      }
    }
    fetchData();
  }, []);

  const handleOrder = async () => {
    try {
      const { data } = await axios.post("/api/orders/create", {
        base: selectedBase,
        sauce: selectedSauce,
        cheese: selectedCheese,
        veggies: selectedVeggies,
      });

      const options = {
        key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
        amount: data.amount,
        currency: "INR",
        name: "Pizza Order",
        description: "Order Payment",
        order_id: data.orderId,
        handler: function (response) {
          axios
            .post("/api/orders/confirm", {
              orderId: data.orderId,
              paymentId: response.razorpay_payment_id,
            })
            .then(() => {
              setOrderPlaced(true);
              alert("Order placed successfully!");
            })
            .catch((err) => {
              console.error("Error confirming order", err);
            });
        },
        prefill: {
          name: "User Name",
          email: "user@example.com",
        },
      };

      const payment = new window.Razorpay(options);
      payment.open();
    } catch (error) {
      console.error("Error creating order", error);
    }
  };

  return (
    <div className="CustomPizza">
      <h1>Customize Your Pizza</h1>
      <div className="pizza-customization">
        <div className="selection">
          <h2>Select Base</h2>
          {bases.map((base) => (
            <button
              key={base._id}
              onClick={() => setSelectedBase(base.name)}
              className={selectedBase === base.name ? "selected" : ""}
            >
              {base.name}
            </button>
          ))}
        </div>

        <div className="selection">
          <h2>Select Sauce</h2>
          {sauces.map((sauce) => (
            <button
              key={sauce._id}
              onClick={() => setSelectedSauce(sauce.name)}
              className={selectedSauce === sauce.name ? "selected" : ""}
            >
              {sauce.name}
            </button>
          ))}
        </div>

        <div className="selection">
          <h2>Select Cheese</h2>
          {cheeses.map((cheese) => (
            <button
              key={cheese._id}
              onClick={() => setSelectedCheese(cheese.name)}
              className={selectedCheese === cheese.name ? "selected" : ""}
            >
              {cheese.name}
            </button>
          ))}
        </div>

        <div className="selection">
          <h2>Select Veggies</h2>
          {veggies.map((veggie) => (
            <button
              key={veggie._id}
              onClick={() => {
                setSelectedVeggies((prev) =>
                  prev.includes(veggie.name)
                    ? prev.filter((item) => item !== veggie.name)
                    : [...prev, veggie.name],
                );
              }}
              className={
                selectedVeggies.includes(veggie.name) ? "selected" : ""
              }
            >
              {veggie.name}
            </button>
          ))}
        </div>

        <button
          className="order-button"
          onClick={handleOrder}
          disabled={orderPlaced}
        >
          {orderPlaced ? "Order Placed" : "Place Order"}
        </button>
      </div>
    </div>
  );
}

export default CustomPizza;
