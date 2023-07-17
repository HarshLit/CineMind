import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useSelector } from "react-redux";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/img.jsx";
import PosterFallback from "../../assets/no-poster.png";

import "./style.scss";

const SingleCarousel = ({ data, loading, className }) => {
  const { url } = useSelector((state) => state.home);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigation = (dir) => {
    if (dir === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? data?.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === data?.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const skItem = () => {
    return(
        <div className="skeletonItem">
            <div className="posterBlock skeleton"></div>
            <div className="textBlock">
                <div className="title skeleton"></div>
                <div className="date skeleton"></div>
            </div>
        </div>
       )
    }

  const item = data?.[currentIndex];
  const posterUrl = item?.file_path
    ? url?.poster + item?.file_path
    : PosterFallback;

  return (
    <div className={`carousel ${className}`}>
      <ContentWrapper>
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow"
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div className="carouselItems">
            <div key={item?.id} className="carouselItem">
              <div className='profile'>
                <Img src={posterUrl} />
              </div>
            </div>
          </div>
        ) : (
            <div className="loadingSkeleton">
                {skItem()}
                {skItem()}
                {skItem()}
                {skItem()}
                {skItem()}
            </div>
        )}
      </ContentWrapper>
      </div>
  );
};

export default SingleCarousel;
