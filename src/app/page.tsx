'use client'
import React, { useState } from 'react';
import Header from '@/components/ui/header';
import AnimalTile from '@/components/AnimalTitle';
import AnimalForm from '@/components/AnimalForm';

interface Animal {
  imageUrl: string;
  name: string;
  price: string;
  description: string;
  isBought?: boolean;
}

const HomePage = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [orders, setOrders] = useState<Animal[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'animals' | 'orders'>('animals');

  const handleAddAnimal = (animal: Animal) => {
    setAnimals([{ ...animal, isBought: false }, ...animals]);
  };

  const handleDeleteAnimal = (index: number) => {
    setAnimals(animals.filter((_, i) => i !== index));
  };

  const handleAddToOrders = (animal: Animal) => {
    if (!orders.find(order => order.name === animal.name)) {
      setOrders([{ ...animal, isBought: true }, ...orders]);
      setAnimals(animals.map(a => a.name === animal.name ? { ...a, isBought: true } : a));
    }
  };

  const handleToggleAnimals = () => {
    setActiveSection('animals');
  };

  const handleToggleOrders = () => {
    setActiveSection('orders');
  };

  const handleDeleteFromOrders = (animalToDelete: Animal) => {
    setOrders(orders.filter(order => order.name !== animalToDelete.name));
    setAnimals(animals.map(animal => 
      animal.name === animalToDelete.name ? { ...animal, isBought: false } : animal
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        activeSection={activeSection}
        onToggleAnimals={handleToggleAnimals}
        onToggleOrders={handleToggleOrders}
      />
      {activeSection === 'animals' && (
        <div className="max-w-7xl mx-auto p-4 mt-8">
          <div className="flex items-center space-x-5">
            <h1 className="text-3xl font-bold mb-8 mt-2 text-left">Добавить животных</h1>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-orange-500 text-white w-9 h-9 mb-5 flex items-center justify-center rounded-full text-2xl"
            >
              <svg
                className="w-6 h-6 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {animals.map((animal, index) => (
              <AnimalTile
                key={index}
                imageUrl={animal.imageUrl}
                name={animal.name}
                price={animal.price}
                description={animal.description}
                onDelete={() => handleDeleteAnimal(index)}
                onBuy={() => handleAddToOrders(animal)}
                isBought={animal.isBought}
              />
            ))}
          </div>
        </div>
      )}
      {activeSection === 'orders' && (
        <div className="max-w-7xl mx-auto p-4 mt-8">
          <h1 className="text-3xl font-bold mb-8 mt-2 text-left">Заказы</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {orders.map((order, index) => (
              <AnimalTile
                key={index}
                imageUrl={order.imageUrl}
                name={order.name}
                price={order.price}
                description={order.description}
                onDelete={() => handleDeleteFromOrders(order)}
                isOrder
                isBought={order.isBought}
              />
            ))}
          </div>
        </div>
      )}
      {isFormOpen && (
        <AnimalForm
          onAddAnimal={handleAddAnimal}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
};

export default HomePage;