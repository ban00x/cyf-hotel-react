import React from "react";
const InfoCard = props => {
  return (
    <div className="card">
      <img src={props.src} className="card-img-top" />
      <div className="card-body">
        <h4 className="city-name">{props.city}</h4>
        <a href={props.link} className="btn btn-primary">
          Know more{" "}
        </a>
      </div>
    </div>
  );
};
const TouristsInfoCards = () => {
  return (
    <div className="tourists-info-cards">
      <InfoCard
        link="https://peoplemakeglasgow.com/"
        city="Glasgow"
        src="https://blog.radissonblu.com/wp-content/uploads/2015/01/glasgow-sunset-city-view-1000x667.jpg"
      />
      <InfoCard
        link="https://visitmanchester.com"
        city="Manchester"
        src="https://www.urlaubstracker.de/wp-content/uploads/2018/03/england-manchester-skyline-1000x667.jpg"
      />
      <InfoCard
        link="https://visitlondon.com"
        city="London"
        src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
      />
    </div>
  );
};
export default TouristsInfoCards;
