import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('hello-world')
      .then(response => response.json())
      .then(data => setMessage(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Microservicio Hola Mundo</h1>
      <p>Respuesta del API: {message}</p>
    </div>
  );
}
