import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Props {
  switchToLogin: () => void;
}

const RegistrationForm: React.FC<Props> = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setMessage('Пароли не совпадают');
      setIsSuccess(false);
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          confirmPassword: undefined // Удаляем confirmPassword перед отправкой
        }),
      });
      const data = await response.json();
      
      setMessage(data.message);
      setIsSuccess(data.success);

      if (data.success) {
        // Очистка формы после успешной регистрации
        setFormData({
          username: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
        });
      }
    } catch (error) {
      setMessage('Произошла ошибка при регистрации');
      setIsSuccess(false);
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
                                              height: '607px', 
                                              paddingTop: '25px',
                                              borderRadius: '10px',
                                               }}>
        <h2 className="font-semibold text-lg" style={{ color: '#f97316', paddingBottom: '20px' }}>Регистрация</h2>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Имя пользователя"
          required
          style={{ margin: '10px 0', padding: '8px', width: '300px', borderRadius: '8px', border: '2px solid #ccc', outline: 'none', }}
          onFocus={(e) => e.target.style.borderColor = '#16a34a'}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Имя"
          required
          style={{ margin: '10px 0', padding: '8px', width: '300px', borderRadius: '8px', border: '2px solid #ccc', outline: 'none', }}
          onFocus={(e) => e.target.style.borderColor = '#16a34a'}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Фамилия"
          required
          style={{ margin: '10px 0', padding: '8px', width: '300px', borderRadius: '8px', border: '2px solid #ccc', outline: 'none', }}
          onFocus={(e) => e.target.style.borderColor = '#16a34a'}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          style={{ margin: '10px 0', padding: '8px', width: '300px', borderRadius: '8px', border: '2px solid #ccc', outline: 'none', }}
          onFocus={(e) => e.target.style.borderColor = '#16a34a'}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Телефон"
          required
          style={{ margin: '10px 0', padding: '8px', width: '300px', borderRadius: '8px', border: '2px solid #ccc', outline: 'none', }}
          onFocus={(e) => e.target.style.borderColor = '#16a34a'}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Пароль"
          required
          style={{ margin: '10px 0', padding: '8px', width: '300px', borderRadius: '8px', border: '2px solid #ccc', outline: 'none', }}
          onFocus={(e) => e.target.style.borderColor = '#16a34a'}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Подтвердите пароль"
          required
          style={{ margin: '10px 0', padding: '8px', width: '300px', borderRadius: '8px', border: '2px solid #ccc', outline: 'none', }}
          onFocus={(e) => e.target.style.borderColor = '#16a34a'}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '300px', marginTop: '10px' }}>
          <button type="submit" style={{ padding: '10px 20px', width: 'calc(50% - 5px)', backgroundColor: '#16a34a', color: 'white', borderRadius: '8px'}}>Регистрация</button>
          <button type="button" onClick={switchToLogin} style={{ padding: '10px 20px', width: 'calc(50% - 5px)', backgroundColor: '#f97316', color: 'white', borderRadius: '8px' }}>Войти</button>
        </div>
      </form> 
      {message && (
        <div style={{ color: isSuccess ? 'green' : 'red', marginTop: '12px' }}>
          {message}
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;