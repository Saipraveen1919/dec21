import React from "react";
import NavBar from "./NavBar";

export default function Cars() {
  const places = [
    {
      carname: "Ford",
      model_year: "2019 ",
      Price:"Rs.7.32L",
      description:
        "Ford Ecosport TITANIUM + 1.5L PETROL AT",
      url: "https://fastly-production.24c.in/hello-ar/dev/uploads/66b756d8c1a4a467cfdc1578/a1df957c-9b61-4020-b615-7834bee61951/slot/10597833784-d39546cd189a46ebb3bedc76d41b5fa6-Exterior-7.jpg?w=700&h=403&auto=format",
    },

    {
      carname: "Hyundai Creta",
      model_year: "2018 ",
      Price: "Rs.7.66L",
      description:
        "Hyundai Creta E PLUS 1.6 PETROL",
      url: "https://fastly-production.24c.in/hello-ar/dev/uploads/66b9a5782769a0c783baa1f4/594be98e-3d54-4d79-afe6-a909cbc0261b/slot/10179388702-990e9905784f40cd91d0099ecef9feb9-Exterior-7.jpg?w=700&h=403&auto=format",
    },
    {
      carname: "Mahindra Thar",
      model_year: "2021 ",
      Price: "Rs.12.5L",
      description:
        "Mahindra Thar LX PETROL HT 4WD AT",
      url: "https://fastly-production.24c.in/hello-ar/dev/uploads/6729ef879f36ebcad98c88ab/06067b9e-cdc5-47a9-9b1d-a3e55af0f277/slot/11065325777-95df39149fde4e5c9b0085f269f73a1d-Exterior-7.jpg?w=700&h=403&auto=format",
    },
    {
      carname: "Ford Mustang",
      model_year: "2019 ",
      Price: "Rs.88.2L",
      description:
        "Ford Mustang is a 4 seater Coupe with 4951 cc engine option ",
      url: "https://imgd.aeplcdn.com/664x374/cw/ec/23766/Ford-Mustang-Exterior-126883.jpg?wm=0&q=80",
    },
  ];

  return (
    <div>
      <NavBar />

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {places.map((place) => (
          <div className="col">
            <div className="card">
              <img src={place.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{place.carname}</h5>
                <p className="card-text">{place.model_year}</p>
                <p className="card-text">{place.Price}</p>
                <p className="card-text">{place.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}