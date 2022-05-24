import React from 'react'
import _escapeRegExp from 'lodash/escapeRegExp'

export const Highlighted = ({ text = '', highlight = '' }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>
  }
  const regex = new RegExp(`(${_escapeRegExp(highlight)})`, 'gi')
  const parts = text.split(regex)
  return (
    <span>
      {parts
        .filter((part) => part)
        .map((part, i) => (regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>))}
    </span>
  )
}

export default Highlighted
