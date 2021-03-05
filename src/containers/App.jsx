import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import "../assets/styles/App.scss";

import "../hooks/useInitialState";
import useInitialState from "../hooks/useInitialState";

export default function App() {
  const API = "http://localhost:3000/initialState";
  const initialState = useInitialState(API);

  return (
    <div className="App">
      <Header></Header>
      <Search></Search>

      {initialState.mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {initialState.mylist.map((item) => (
              <CarouselItem key={item.id} {...item}></CarouselItem>
            ))}
          </Carousel>
        </Categories>
      )}
      <br></br>

      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends.map((item) => (
            <CarouselItem key={item.id} {...item}></CarouselItem>
          ))}
        </Carousel>
      </Categories>
      <br></br>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {initialState.originals.map((item) => (
            <CarouselItem key={item.id} {...item}></CarouselItem>
          ))}
        </Carousel>
      </Categories>

      <Footer></Footer>
    </div>
  );
}
