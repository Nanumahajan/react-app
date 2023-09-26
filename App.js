import React from "react";
import ReactDOM from "react-dom/client";

export const Title = () => {
  return (
    <img
      className="logo"
      src="https://static.vecteezy.com/system/resources/previews/004/312/696/original/food-logo-template-design-icon-illustration-vector.jpg"
      alt="logo"
    />
  );
};

const Heading = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About-Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const burgerking = {
  name: "Burger-King",
  image:
    "https://b.zmtcdn.com/data/pictures/9/17806979/1223198a694522f28b93edd304cb84a2.jpg?fit=around|750:500&crop=750:500;*,*",
  cusines: ["Burger", "Fries"],
  rating: "4.2",
};

// const RestrauntCard = () => {
//   return (
//     <div className="card">
//       <img src={burgerking.image} alt="food-image" />
//       <h2>{burgerking.name}</h2>
//       <h3>{burgerking.cusines.join(",")}</h3>
//       <h4>{burgerking.rating} stars</h4>
//     </div>
//   );
// };

const resObj = {
  id: "48344",
  name: "KFC",
  cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
  locality: "Phase 3",
  areaName: "Sector 60",
  costForTwo: "\u20B9500 for two",
  cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  avgRating: 4,
  feeDetails: {
    restaurantId: "48344",
    fees: [
      {
        name: "BASE_DISTANCE",
        fee: 4900,
      },
      {
        name: "BASE_TIME",
      },
      {
        name: "ANCILLARY_SURGE_FEE",
      },
    ],
    totalFee: 4900,
  },
  parentId: "547",
  avgRatingString: "4.0",
  totalRatingsString: "10K+",
  sla: {
    deliveryTime: 22,
    lastMileTravel: 5,
    serviceability: "SERVICEABLE",
    slaString: "22 mins",
    lastMileTravelString: "5.0 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2023-09-15 00:00:00",
    opened: true,
  },
  badges: {},
  isOpen: true,
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: {},
      textBased: {},
      textExtendedBadges: {},
    },
  },
  aggregatedDiscountInfoV3: {
    header: "EVERY ITEM",
    subHeader: "@ \u20B9179",
  },
  differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
      mediaType: "ADS_MEDIA_ENUM_IMAGE",
      lottie: {},
      video: {},
    },
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
};

const ressObj = {
  info: {
    id: "81041",
    name: "Amrit Sweets",
    cloudinaryImageId: "ghemfhdccguwa9bjjzxu",
    locality: "Phase 5",
    areaName: "Sector 59",
    costForTwo: "\u20B9250 for two",
    cuisines: [
      "North Indian",
      "South Indian",
      "Chinese",
      "Sweets",
      "Desserts",
      "Tandoor",
    ],
    avgRating: 4.3,
    veg: true,
    feeDetails: {
      restaurantId: "81041",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 5000,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 5000,
    },
    parentId: "16593",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 29,
      lastMileTravel: 6.1,
      serviceability: "SERVICEABLE",
      slaString: "29 mins",
      lastMileTravelString: "6.1 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-14 22:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "\u20B9125 OFF",
      subHeader: "ABOVE \u20B9199",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/amrit-sweets-phase-5-sector-59-chandigarh-81041",
    type: "WEBLINK",
  },
};

// "analytics": {

// },
// "cta": {
//   "link": "https://www.swiggy.com/restaurants/kfc-phase-3-sector-60-chandigarh-48344",
//   "type": "WEBLINK"
// }

const RestrauntCard = (props) => {
  // const {resData} = props;
  const { resData } = props;
  console.log(resData, "insideeeeeeeecomponenssnsnhdhdhd");
  return (
    <div className="res-card">
      <img
        className="res-image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
        alt="Burger-King"
      />
      <>
        <h3>{resData?.name}</h3>
        <h5>{resData?.cuisines}</h5>
        <h5>{resData?.avgRating}</h5>
      </>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestrauntCard resData={resObj} />
        <RestrauntCard resname="KFC" cusines="Chicken,Rolls" />
        {/* <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard /> */}
      </div>
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};
const AppLayout = () => {
  return (
    <>
      <Heading />
      <Body />
      {/* <Footer /> */}
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// root.render(jsxHEading)
// this is how we render a component in react it is a bit diffrent then rendring a element in react
