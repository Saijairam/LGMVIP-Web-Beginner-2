import React,{useState} from 'react';
import './App.css';
import axios from 'axios';
import Rocket from './images/rocket.gif';

function App() {
  
  const [data, setdata] = useState([])
  const [isfetching, setisfetching] = useState(true)
   const fetchdata = async ()=>{
      await axios.get('https://reqres.in/api/users?page=1').then((result)=>setdata(result.data.data)).catch((err)=>console.log(err.message))
      setisfetching(false)
     }
   
  return (
    <div className="App">
      <div className='navbar'>
           <a className='logo'>SJR</a>
           <button className='user-btn btn' onClick={fetchdata}>Get Users</button>
      </div>
      <div className='main-block'>
          { isfetching ? (
          <div className='loading'>
             <h4>Click on users button to load users</h4><br/>
             <img src={Rocket} alt='..'/>
          </div>) : (<div className='information'>
              {data.map((item,index)=>(
                // <div key={item.id}>
                //   <p>{item.email}</p>
                //   <p>{item.first_name}</p>
                //    <p>{item.last_name}</p>
                //    <img src={item.avatar} alt='..'/>
                //   </div>
                <div className='container' key={index}>
                    <div className='sub-block image'><img src={item.avatar} alt='..'/></div>
                    <div className='name'>
                        <div className='sub-block firstname'>{item.first_name}</div>
                        <div className='sub-block lastname'>{item.last_name}</div>
                    </div>
                    <div className='sub-block email'>{item.email}</div>
                </div> 
              ))}
          </div>)}
      </div>
      
    </div>
  );
}

export default App;
