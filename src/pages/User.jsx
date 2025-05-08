import { useLoaderData, useParams } from '@tanstack/react-router'
import React from 'react'

function User() {
  const { userId } = useParams();
  const user = useLoaderData();
  return (
    <div>
      <h2>User Page</h2>
      <p>ID: {userId}</p>
      <p>Name: {user.name}</p>
    </div>
  )
}

export default User