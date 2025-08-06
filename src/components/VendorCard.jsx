import React from "react";

const VendorCard = ({ vendor }) => {
  return (
    <div className="vendor-card">
      <div className="vendor-header">
        <img src={vendor.image} alt={vendor.name} className="vendor-avatar" />
        <div>
          <p className="vendor-verified">✅ Verified by GreenPal</p>
          <h3 className="vendor-name">{vendor.name}</h3>
          <p className="vendor-rating">⭐ {vendor.rating}</p>
        </div>
      </div>
      <p className="vendor-location">📍 {vendor.location}</p>
      <p className="vendor-service">{vendor.service}</p>
      <p className="vendor-review">{vendor.review}</p>
      <p className="vendor-date">{vendor.date}</p>
    </div>
  );
};

export default VendorCard;
