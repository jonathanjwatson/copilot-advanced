import React, { useState } from "react";
import "./PaymentPortal.css"; // Assuming you have a CSS file for styles

const PaymentPortal = () => {
  const [formData, setFormData] = useState({
    name: "",
    zip: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });

  const [errors, setErrors] = useState({});

  const validateInput = (name, value) => {
    let errorMessage = "";

    switch (name) {
      case "name":
        if (!value) {
          errorMessage = "Name is required.";
        }
        break;
      case "zip":
        if (!/^\d{5}$/.test(value)) {
          errorMessage = "Invalid zip code.";
        }
        break;
      case "cardNumber":
        if (!/^\d{16}$/.test(value)) {
          errorMessage = "Invalid credit card number.";
        }
        break;
      case "expMonth":
        if (!value) {
          errorMessage = "Expiration month is required.";
        }
        break;
      case "expYear":
        if (!value) {
          errorMessage = "Expiration year is required.";
        }
        break;
      case "cvc":
        if (!/^\d{3}$/.test(value)) {
          errorMessage = "Invalid CVC number.";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateInput(name, value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      validateInput(key, formData[key]);
      if (errors[key]) {
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted successfully");
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Payment Portal</h2>
        <form onSubmit={handleSubmit}>
          {["name", "zip", "cardNumber", "expMonth", "expYear", "cvc"].map(
            (field) => (
              <>
                <div className="mb-4" key={field}>
                  <label htmlFor={field} className="block text-gray-700">
                    {field.charAt(0).toUpperCase() +
                      field.slice(1).replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type="text"
                    id={field}
                    name={field}
                    className={`w-full px-3 py-2 border rounded-lg ${
                      errors[field] ? "error" : ""
                    }`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={formData[field]}
                    required
                    data-testid={`${field}-input`}
                  />

                  {errors[field] && (
                    <div className="error-message">{errors[field]}</div>
                  )}
                </div>
              </>
            )
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPortal;
