import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  // console.log(import.meta.env.VITE_GIPHY_API_KEY);

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  const onAddCategory = () => {
    setCategories(['Valorant', ...categories]);
  };

  // console.log(categories);
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories}/>
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
