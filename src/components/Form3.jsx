import { useState } from 'react';

const AssetForm = ({ onSaveData, buttonText }) => {
  const [formData, setFormData] = useState({
    name: '',
    state: '',
    type: '',
    power: '',
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
      <div>
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
      <div className="form-group select-container">
        <label htmlFor="type">Eco:</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          required
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label htmlFor="power">Power:</label>
        <input
          type="float"
          id="power"
          name="power"
          value={formData.power}
          onChange={handleInputChange}
          placeholder="Enter the Power..."
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
