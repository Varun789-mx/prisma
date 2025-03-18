import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  interface prop { 
    name:string;
    email:string;
  }
  const [user, setuser] = useState<prop[]>([]);
  const url = 'http://localhost:5000/getuser';
  const fetchuser = useCallback(async () => {
    try {
      const response = await fetch(url);
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
  }, []);
  useEffect(() => {
    fetchuser()
  }, [fetchuser]);
  return (
    <>
      <div>
        {user.length > 0 ? (user.map((data:prop, index:number) => (
          <div key={index}>
            <h1>{data.name}</h1>
            <p>{data.email}</p>
          </div>
        ))): (
          <p>Loading....</p>
        )}
        
      </div>
    </>
  )
}

export default App
