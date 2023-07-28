import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  // console.log(import.meta.env.VITE_GIPHY_API_KEY);

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    // console.log(newCategory);
    setCategories([newCategory, ...categories]);
  };

  // console.log(categories);
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
