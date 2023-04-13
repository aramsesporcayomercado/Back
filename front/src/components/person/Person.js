import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.nombre} ({item.edad} años)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
