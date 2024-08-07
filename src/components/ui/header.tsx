import React from 'react';
import LinkComponent from './link'; 
import ProfileIcon from '/Users/lfawe/summer_practice/pet-store-app/public/profile.svg'; 

interface HeaderProps {
  activeSection: 'animals' | 'orders';
  onToggleAnimals: () => void;
  onToggleOrders: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onToggleAnimals, onToggleOrders }) => {
  return (
    <nav className="bg-green-600 p-4 h-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        <LinkComponent href='/' className="text-white text-lg font-semibold">PetShopByFedor</LinkComponent>
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleAnimals}
            className={`px-4 py-0 ${activeSection === 'animals' ? 'text-white font-semibold' : 'text-white font-semibold'} hover:text-gray-300`}
          >
            Животные
          </button>
          <button
            onClick={onToggleOrders}
            className={`px-4 py-0 ${activeSection === 'orders' ? 'text-white font-semibold' : 'text-white font-semibold'} hover:text-gray-300`}
          >
            Заказы
          </button>
          <LinkComponent href="/login">
            <img src={ProfileIcon.src} alt="Profile Icon" className="w-9 h-9 text-white cursor-pointer"/>
          </LinkComponent>
        </div>
      </div>
    </nav>
  );
}

export default Header;