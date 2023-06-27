import React from 'react';
import { useParams } from 'react-router-dom';

const Room = () => {
const { id } = useParams()
  return (
    <div>Room {id}</div>
  )
}

export default Room