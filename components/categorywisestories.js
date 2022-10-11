import React from "react";
import Link from "next/link";

function CategorywiseStories() {
  const CategoryData = [
    {
      title: "Entertainment",
    },
    {
      title: "Food & Drinks",
    },
    {
      title: "Sport",
    },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {CategoryData.map((result, key) => {
          //console.log(result);
          return (
            <>
              <div key={key} style={{ margin: 5 }}>
                <h4>{result.title}</h4>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default CategorywiseStories;
