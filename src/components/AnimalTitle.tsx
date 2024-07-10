import React, { useState } from 'react';

interface AnimalTileProps {
  imageUrl: string;
  name: string;
  price: string;
  description: string;
  onDelete: () => void;
  onBuy?: () => void;
  isOrder?: boolean;
  isBought?: boolean;
}

const AnimalTile: React.FC<AnimalTileProps> = ({ imageUrl, name, price, description, onDelete, onBuy, isOrder, isBought }) => {
  const [bought, setBought] = useState(isBought || false);

  const handleBuy = () => {
    setBought(true);
    if (onBuy) {
      onBuy();
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between h-84 w-65">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-40 rounded-lg mb-2 object-contain"
        style={{ height: '220px' }}
      />
      <div className="flex flex-col justify-between flex-grow">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700 mb-2">Описание: {description}</p>
        <p className="text-gray-900 font-bold mb-4">Цена: {price} Р.</p>
      </div>
      <div className="flex items-center mt-2 space-x-2">
        {!isOrder && !isBought && ( 
          <div className="flex-grow">
            <button
              onClick={handleBuy}
              className="w-full h-10 rounded-lg bg-green-500 text-white text-center font-semibold"
            >
              Купить
            </button>
          </div>
        )}
        {!isOrder && isBought && ( 
          <div className="flex-grow">
            <button
              className="w-full h-10 rounded-lg bg-gray-400 text-white text-center font-semibold cursor-not-allowed"
              disabled
            >
              Куплен
            </button>
          </div>
        )}
        <button
          onClick={onDelete}
          className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AnimalTile;