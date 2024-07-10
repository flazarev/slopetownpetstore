'use client'
import Headerdef from '@/components/ui/headerdef';
import React, { useState } from 'react';
import RegistrationForm from '@/components/RegistrationForm';
import LoginForm from '@/components/LoginForm';

function App() {
  const [isRegistering, setIsRegistering] = useState(true);

  const switchToLogin = () => setIsRegistering(false);
  const switchToRegister = () => setIsRegistering(true);

  return (
    <div className="min-h-screen bg-gray-100">
        <Headerdef/>
        <div className="App" style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {isRegistering ? (
            <RegistrationForm switchToLogin={switchToLogin} />
            ) : (
            <LoginForm switchToRegister={switchToRegister} />
            )}
        </div>
        </div>
    </div>
  );
}

export default App;