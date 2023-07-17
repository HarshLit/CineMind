import React from 'react'
import { useParams } from 'react-router-dom'

import useFetch from '../../../hooks/useFetch'
import PersonTvCarousel from '../../../components/Carousel/PersonTvCarousel'

const PersonMovie = () => {
    const {mediaType, id} = useParams()
    const {data, loading} = useFetch(`/person/${id}/tv_credits`);

    const title = 'Television Appearance';

  return (
    <PersonTvCarousel
            title={title}
            data={data?.cast}
            loading={loading}
        />
  )
}

export default PersonMovie
