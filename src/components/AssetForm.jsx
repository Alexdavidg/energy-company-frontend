import { useState } from 'react';

const AssetForm = ({ onSaveData, buttonText }) => {
  const [formData, setFormData] = useState({
    name: '',
    state: '',
    kilometers: '',
    type: '',
    func: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSaveData = () => {
    onSaveData(formData);
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter name..."
          required
        />
      </div>
      <div className="form-group select-container">
        <label htmlFor="state">State:</label>
        <select
          id="state"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          required
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="kilometers">Kilometers:</label>
        <input
          type="text"
          id="kilometers"
          name="kilometers"
          value={formData.kilometers}
          onChange={handleInputChange}
          placeholder="Enter kilometers..."
          required
        />
      </div>
      <div className="form-group select-container">
        <label htmlFor="type">Type:</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          required
        >
          <option value="Car">Car</option>
          <option value="Truck">Truck</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="func">Function:</label>
        <input
          type="text"
          id="func"
          name="func"
          value={formData.func}
          onChange={handleInputChange}
          placeholder="Enter function..."
          required
        />
      </div>
      <button className='button' type="button" onClick={handleSaveData}>
        {buttonText}
      </button>
    </form>
  );
};

export default AssetForm;