import React from 'react'

import PersonBanner from './personBanner/PersonBanner'
import PersonMovie from './personWork/PersonMovie'
import PersonTv from './personWork/PersonTv'

const Person = () => {
  // const {mediaType, id} = useParams()
  // const {data, loading} = useFetch(`/person/${id}/movie_credits`);
  // const {data: credits, loading: creditsLoading} = useFetch(`/person/${id}/tv_credits`);
  // const {data: credits, loading: creditsLoading} = useFetch(`/person/${id}`)

  return (<div>
    <PersonBanner />
    <PersonMovie />
    <PersonTv />
    </div>
  )
}

export default Person