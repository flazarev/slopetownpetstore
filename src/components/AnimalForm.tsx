import React, { useState } from 'react';

interface AnimalFormProps {
  onAddAnimal: (animal: { imageUrl: string, name: string, price: string, description: string }) => void;
  onClose: () => void;
}

const AnimalForm: React.FC<AnimalFormProps> = ({ onAddAnimal, onClose }) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (imageFile) {
      const newAnimal = {
        imageUrl,
        name,
        price,
        description,
      };
      onAddAnimal(newAnimal);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Изображение</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-green-600 focus:border-green-600"
              required
            />
          </div>
          {imageUrl && (
            <div className="mb-4">
              <img src={imageUrl} alt="Preview" className="w-full h-40 rounded-lg object-contain" />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700">Имя</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-green-600 focus:border-green-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Цена</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-green-600 focus:border-green-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Описание</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-green-600 focus:border-green-600"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg mr-2"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Добавить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AnimalForm;