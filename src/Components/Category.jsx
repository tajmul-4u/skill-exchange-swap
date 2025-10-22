import React, { useEffect, useState } from "react";

const Category = () => {
 const [categoryData, setCategory] = useState([]);

 useEffect(() => {
   fetch("/skill.json")
     .then((res) => res.json())
     .then((data) => setCategory(data));
 }, []);

 console.log(categoryData);
  return (
    <div>
      <h1>All category here</h1>
    </div>
  );
};

export default Category;
