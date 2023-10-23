import { useEffect, useState } from "react";
import ToursComponent from "./Tours";


const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false)

  const handleRemove = (id) => {
    const newList = tours.filter((tour) => tour.id !== id)
    setTours(newList)
  }

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok){
        setIsError(true)
      }
      const toursData = await response.json();
      console.log(toursData);
      setTours(toursData)
    } catch (error) {
      console.log(error)
      setIsError(true)
    }
    setIsLoading(false);
  };


  useEffect(() => {
    fetchData();
  }, []);

  console.log(tours)

  if(isLoading){
    return <main>
      <div className="loading">
      <h1>.</h1>
      </div>
    </main>
  }

  return (<main>
  <ToursComponent tours={tours} handleRemove={handleRemove} />
  <button onClick={fetchData}>Load</button>


  </main>);
};
export default App;
