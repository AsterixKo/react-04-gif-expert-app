import { useState } from 'react';

export const GifExpertApp = () => {
  // console.log(import.meta.env.VITE_GIPHY_API_KEY);

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  console.log(categories);
  return (
    <>
      <h1>GifExpertApp</h1>

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
        <li></li>
      </ol>
    </>
  );
};
