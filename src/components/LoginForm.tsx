import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface Props {
  switchToRegister: () => void;
}

const LoginForm: React.FC<Props> = ({ switchToRegister }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', formData);
      setMessage(response.data.message);
      setIsSuccess(true);
      console.log('Login successful:', response.data);
      
      // Очистка формы после успешного входа
      setFormData({
        username: '',
        password: '',
      });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setMessage(error.response.data.message || 'Ошибка входа');
      } else {
        setMessage('Произошла ошибка при входе');
      }
      setIsSuccess(false);
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <form className='shadow-lg max-w-md w-full bg-white p-8 rounded-lg' onSubmit={handleSubmit} style={{  
                                              marginTop: '50px',
                                              display: 'flex',
                                              flexDirection: 'column',
                                              alignItems: 'center',
                                              width: '440px',
                                              height: '287px', 
                                              paddingTop: '25px',
                                              borderRadius: '10px',
                                               }}>
        <h2 className="font-semibold text-lg" style={{ color: '#f97316', paddingBottom: '20px' }}>Вход</h2>
        <input 
          name="username" 
          type="text" 
          placeholder="Имя пользователя" 
          value={formData.username}
          onChange={handleChange} 
          required 
          style={{ margin: '10px 0', padding: '8px', width: '300px', borderRadius: '8px', border: '2px solid #ccc', outline: 'none', }}
          onFocus={(e) => e.target.style.borderColor = '#16a34a'}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />
        <input 
          name="password" 
          type="password" 
          placeholder="Пароль" 
          value={formData.password}
          onChange={handleChange} 
          required 
          style={{ margin: '10px 0', padding: '8px', width: '300px', borderRadius: '8px', border: '2px solid #ccc', outline: 'none', }}
          onFocus={(e) => e.target.style.borderColor = '#16a34a'}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '300px', marginTop: '10px' }}>
          <button type="submit" style={{ padding: '10px 20px', width: 'calc(50% - 5px)', backgroundColor: '#16a34a', color: 'white', borderRadius: '8px' }}>Войти</button>
          <button type="button" onClick={switchToRegister} style={{ padding: '10px 20px', width: 'calc(50% - 5px)', backgroundColor: '#f97316', color: 'white', borderRadius: '8px' }}>Регистрация</button>
        </div>
      </form>
      {message && (
        <div style={{ color: isSuccess ? 'green' : 'red', marginTop: '10px' }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default LoginForm;
