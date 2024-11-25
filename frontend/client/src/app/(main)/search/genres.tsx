'use client'

import { FETCH_GENRES } from '@/graphql/queries/genre'
import { Genre } from '@/lib/types'
import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

export default function Genres() {
  const { loading, error, data } = useQuery(FETCH_GENRES)

  const formatGenre = (genre: string) => {
    return genre
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {data?.genres.map((genre: Genre) => (
        <div
          key={genre.name}
          className="flex aspect-square items-center justify-center p-4 text-lg font-bold"
        >
          {formatGenre(genre.name)}
        </div>
      ))}
    </div>
  )
}
