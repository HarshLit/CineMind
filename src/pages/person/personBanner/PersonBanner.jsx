import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import "./style.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/img.jsx";
import PosterFallback from '../../../assets/no-poster.png';
import CircleRating from "../../../components/circleRating/CircleRating";
import SingleCarousel from '../../../components/Carousel/SingleCarousel'

const PersonBanner = () => {

  const [show, setShow] = useState(false)

  const {mediaType, id} = useParams()
  const {data, loading} = useFetch(`/person/${id}`)

  const {url} =useSelector((state) => state.home)

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const {data:images, loading: imagesLoading} = useFetch(`/person/${id}/images`);


  return (
    <div className="detailsBanner">
    {!loading ? (
      <>
        {!!data && (
          <React.Fragment>
          <div className="backdrop-img">
            <Img src={url.backdrop + data?.profile_path} />
          </div>
          <div className="opacity-layer"></div>
          <ContentWrapper>
            <div className="content">
              <div className="left">
                {data?.profile_path ? (
                  <SingleCarousel
                    data={images?.profiles}
                    loading={imagesLoading}
                    // className='posterImg'
                  />
                ) : (
                  <Img 
                    className="posterImg"
                    src={PosterFallback}
                  />)}
              </div>
              <div className="right">
                <div className="title">
                {`${data.name}`}
                </div>
                <div className="subtitle">
                    {`Age ${dayjs().diff(dayjs(data.birthday), 'years')}`}
                </div>
                <div className="row">
                    <CircleRating 
                    rating={data.popularity.toFixed(0)} />
                </div>
                <div className="overview"> 
                  <div className="heading">
                   Overview 
                   </div>
                    <div className="discription">
                      {data.biography}
                    </div>
                </div>
                <div className="info">
                  {data.place_of_birth && (
                    <div className="infoItemPerson">
                      <span className="text bold">
                        Born In:{''}
                      </span>
                      <span className="text">
                        {data.place_of_birth}
                      </span>
                    </div>
                  )}
                  {data.birthday && (
                    <div className="infoItemPerson">
                      <span className="text bold">
                        Birthday:{''}
                      </span>
                      <span className="text">
                        {dayjs(data.birthday).format('MMM D, YYYY')}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ContentWrapper>
          </React.Fragment>
        )}
        </>
    ) : (
      <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
      </div>
    )}
      
    </div>
  )
}

export default PersonBanner
