import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  interface prop {
    id: number;
    name: string;
    email: string;
  }
  const [user, setuser] = useState<prop[]>([]);
  const url = 'http://localhost:5000/getuser';
  const fetchuser = useCallback(async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors', // Explicitly specify CORS mode
        headers: {
          'Accept': 'application/json'
        }
      });
      if (!response.ok) {
        console.log(`Response code:${response.status}`);
        return;
      }
      const data = await response.json();
      setuser(data);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }, [url]);
  useEffect(() => {
    fetchuser()
  }, [fetchuser]);
  return (
    <>
      <div className='bg-gray-800 text-white'>
        {user.length > 0 ? (user.map((data: prop, index: number) => (
          <div key={index}>
            <div className='block flex' >

              <div className='w-1/5 p-1 m-0.5 border-1 border-gray-400'><p className='font-sans'>ID: {data.id}</p></div>
              <div className='w-1/5 p-1 m-0.5 border-1 border-gray-400'><p className='font-sans'>Name: {data.name}</p></div>
              <div className='w-1/5 p-1  m-0.5 border-1 border-gray-400'><p className='font-sans'>Email: {data.email}</p></div>
            </div>
          </div>
        ))) : (
          <p>Loading....</p>
        )}

      </div>
    </>
  )
}

export default App
