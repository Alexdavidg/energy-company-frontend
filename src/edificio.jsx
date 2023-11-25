import { useState, useEffect } from 'react';
import { MainNavbar } from "./components/MainNavbar"

function Edificio() {
  const [formData, setFormData] = useState({
    name: '',
    state: '',
    number: '',
  });

  const [assets, setAssets] = useState([]);
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSaveData = async () => {
    try {
      const response = await fetch('http://localhost:8000/savedata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setMessage(result.message);

      // Actualiza la lista de activos después de guardar datos
      fetchAssets();
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const handleDeleteAsset = async (name) => {
    try {
      const response = await fetch(`http://localhost:8000/deleteasset/${name}`, {
        method: 'DELETE',
      });

      const result = await response.json();
      setMessage(result.message);

      // Actualiza la lista de activos después de eliminar un activo
      fetchAssets();
    } catch (error) {
      console.error('Error deleting asset:', error);
    }
  };

  const fetchAssets = async () => {
    try {
      const response = await fetch('http://localhost:8000/listassets');
      const data = await response.json();
      setAssets(data);
    } catch (error) {
      console.error('Error fetching assets:', error);
    }
  };

  useEffect(() => {
    // Cargar la lista de activos al montar el componente
    fetchAssets();
  }, []);

  return (
    <div id='gestionContainer' className="relative w-[100vw] h-fit md:h-[100vh] flex flex-col px-4 bg-background overflow-x-hidden">
      <MainNavbar mode="black" />
      <div className="p-20">
        <h2 className='title'>Save Data</h2>
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
          <div>
            <label htmlFor="Number">Numero:</label>
            <input
              type="text"
              id="Number"
              name="Number"
              value={formData.number}
              onChange={handleInputChange}
              placeholder="Enter the number..."
              required
            />
          </div>
          <button className='button' type="button" onClick={handleSaveData}>
            Save Data
          </button>
        </form>
        <h2 className='title mt-8'>List of Assets</h2>
        <ul>
          {assets.map((asset, index) => (
            <li key={index}>
              {`${asset.name} - ${asset.state} - ${asset.kilometers} - ${asset.type} - ${asset.func}`}
              <button className="delete-button" onClick={() => handleDeleteAsset(asset.name)}>
                Delete
              </button>
            </li>
          ))}
        </ul>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Edificio;
