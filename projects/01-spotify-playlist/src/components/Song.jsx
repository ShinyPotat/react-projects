import React, { useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'

export function Song ({
  id,
  cover,
  title,
  isExplicit,
  artists,
  album,
  initialIsLiked,
  date,
  duration
}) {
  const [isLiked, setIsLiked] = useState(initialIsLiked)

  const isExplicitClassName = isExplicit ? 'is-explicit' : 'not-explicit'
  const heartClassName = isLiked ? 'heart-icon is-liked' : 'heart-icon'
  const heartIcon = isLiked ? <FaHeart /> : <FaRegHeart />

  const handleLikeButton = () => {
    setIsLiked(!isLiked)
  }

  return (
    <article className='sp-song'>
      <p className='sp-song-id'>
        <span>{id}</span>
      </p>
      <header className='sp-song-header'>
        <img className='sp-song-cover' src={cover} alt='song cover' />
        <div className='sp-song-info'>
          <a className='sp-song-info-title' href='#'>
            {title}
          </a>
          <div className='sp-song-info-bottom'>
            <span className={isExplicitClassName} />
            <div className='sp-song-text'>
              {artists.map((artist, index) => (
                <React.Fragment key={artist}>
                  <a className='sp-song-link' href='#'>
                    {artist}
                  </a>
                  {index < artists.length - 1 && ', '}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </header>
      <a className='sp-song-link sp-song-album' href='#'>
        {album}
      </a>
      <span className='sp-song-text sp-song-date'>{date}</span>
      <div className={heartClassName} onClick={handleLikeButton}>
        {heartIcon}
      </div>
      <span className='sp-song-text sp-song-duration'>{duration}</span>
      <BsThreeDots className='three-dots' />
    </article>
  )
}
