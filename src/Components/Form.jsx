import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [isValidForm, setIsValidForm] = useState(false); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Mail is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid mail";
    setIsValidForm(Object.keys(newErrors).length === 0);
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();    
    const isValidForm = Object.keys(validationErrors).length === 0;
    setIsValidForm(isValidForm);
    if (isValidForm) {
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };
  const invalidMessage = "Please verify your information again.";
  const validMessage = `Thanks, ${formData.name}, we will contact you via email.`;

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>

        <button type="submit">Send</button>
      </form>
      <h4>{errors.email || errors.name ? invalidMessage : ""}</h4>
      <h2>{isValidForm ? validMessage : ""}</h2>
    </div>
  );
};

export default Form;
