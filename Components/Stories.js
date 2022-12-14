import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import { Story } from '../Components/Story'

export const Stories = () => {

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
  const suggestions = [...Array(20)].map((_, i) => ({
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  }))

  setSuggestions(suggestions);
  }, [])
  
  return (
    <div className='flex space-x-2 p-4 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
      {suggestions.map(profile => (
        <Story 
          key={profile.userId}
          name={profile.username}
          avatar={profile.avatar}
        />
      ))}
        {/* Story */}
        {/* Story */}
        {/* Story */}
        {/* Story */}
        {/* Story */}
        {/* Story */}
        {/* Story */}
    </div>
  )
}

export default Stories