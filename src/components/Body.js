import Item from "./Item";
import restList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  const [restuarentList,setrestuarentList] = useState(restList);

  return (
    <div className="body">
      <div className="filter">

        <button className="filter-btn" onClick={() => {
          const filterList = restuarentList.filter((restuarent) => {return restuarent.info.avgRating > 4.5});
          setrestuarentList(filterList);
        }}>All Top Restuarants</button>
        
      </div>
      <div className="item-container">
         {restuarentList.map( (x) =><Item key={x.info.id} restData={x.info}/> )}
      </div>
    </div>
  );
};

export default Body;