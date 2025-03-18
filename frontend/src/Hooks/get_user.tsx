import React from "react"

async function Get_user()=> {
	const url = 'http://localhost:5000/getuser";
	const[user,setuser] = usestate([{}])
	
	useMemo(()=> { 
	try {
	const response = await fetch(url);
	if(!response.ok) {
		throw new Error(`Response Status: ${response.status)`);
		}

		setuser = await response.json();
		console.log(user);
	}
	}
	catch(e) { 
		console.log(error.message);
	}
	},[user])

}



