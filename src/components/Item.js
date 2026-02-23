import { CDN_LINK } from "../utils/constants";

const Item = (props) => {
  const { restData } = props;

  const { cloudinaryImageId,name,cuisines,costForTwo,avgRating} = restData;

  return (
    <div className="item">
      <img
        className="biryani-img"
        alt="Biryana-item"
        src={ CDN_LINK + cloudinaryImageId }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default Item;