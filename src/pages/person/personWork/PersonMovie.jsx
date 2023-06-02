import React from 'react'
import { useParams } from 'react-router-dom'

// import Carousel from '../../../components/carousel/Carousel'
import useFetch from '../../../hooks/useFetch'
import PersonMovieCarousel from '../../../components/Carousel/PersonMovieCarousel'

const PersonMovie = () => {
    const {mediaType, id} = useParams()
    const {data, loading} = useFetch(`/person/${id}/movie_credits`);

    const title = 'Starring in Movies';

  return (
    <PersonMovieCarousel
            title={title}
            data={data?.cast}
            loading={loading}
        />
  )
}

export default PersonMovie
