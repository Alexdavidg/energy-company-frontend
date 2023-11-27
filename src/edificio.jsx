import { useState, useEffect } from 'react';
import { MainNavbar } from "./components/MainNavbar";
import AssetForm from "./components/Form2";

function Edificio() {
  const [assets, setAssets] = useState([]);
  const [message, setMessage] = useState('');

  const handleSaveData = async (formData) => {
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
        <AssetForm onSaveData={handleSaveData} buttonText="Save Data" />

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
