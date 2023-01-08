import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';

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
  console.log(suggestions);
  }, [])
  
  return (
    <div>
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