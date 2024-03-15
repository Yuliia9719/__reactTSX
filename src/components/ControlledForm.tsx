import { useState, FormEvent } from "react";

interface FormDataInterface {
  username: string;
  password: string;
}

const initialFormData: FormDataInterface = {
  username: "",
  password: ""
};
const ControlledForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (fieldName: string, fieldValue: string) => {
    setFormData({ ...formData, [fieldName]: fieldValue });
  };
  return (
    <form onSubmit={handleSubmit} className="col-6">
      <div className="mb-3">
        <label className="form-label" htmlFor="username">
          User name
        </label>
        <input
          className="form-control"
          id="username"
          type="text"
          placeholder="Enter user name"
          name="username"
          value={formData.username}
          onChange={event => handleInputChange("username", event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          className="form-control"
          id="password"
          type="text"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={event => handleInputChange("password", event.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-warning">
        Submit
      </button>
    </form>
  );
};

export default ControlledForm;
