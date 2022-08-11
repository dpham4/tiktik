import React from 'react'

interface IProps {
    posts: String;
  }

const NoResults = ({text}: IProps) => {
  return (
    <div>
    {text}
    </div>
  )
}

export default NoResults
