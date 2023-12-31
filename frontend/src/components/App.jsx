import React,{useEffect,useState} from 'react';
import Header from './Header'
import Card from './Card'
import axios from 'axios';
axios.defaults.withCredentials = true;
function Main() {
  // const [stories,setStory]=useState({
  //   title:"",
  //   url:"",
  //   story:""
  // })
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .request({
        method: "GET",
        url: `https://picfable.vercel.app/stories/fetchstories`,
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
   <>
   <Header />
   {data ? (
        <div className='card-container mt-3 d-flex align-items-start'>
          {data.map((item) => (
            <div key={item._id}>
              {console.log(item._id)}
              <Card url={item.url } id={item._id} title={item.title} content={item.story}/>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}

   <div className='text-center'>
   <button onClick={() => window.location.href="https://picfable-frontend.vercel.app/upload"} className='text-center'>Post Story</button>
   </div>
  </>
  );
}
// 
export default Main
