import React, { useState } from "react";
import Card from "./card";
import Button from "./button";

// Sample data
const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "inspiration",
    subcategory: "work",
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
    category: "inspiration",
    subcategory: "life",
  },
  {
    text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "inspiration",
    subcategory: "work",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    category: "inspiration",
    subcategory: "life",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    category: "motivation",
    subcategory: "perseverance",
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
    category: "motivation",
    subcategory: "perseverance",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "motivation",
    subcategory: "perseverance",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "motivation",
    subcategory: "dreams",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    category: "motivation",
    subcategory: "success",
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
    category: "motivation",
    subcategory: "success",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    category: "life",
    subcategory: "happiness",
  },
  {
    text: "Happiness is not something readymade. It comes from your own actions.",
    author: "Dalai Lama",
    category: "life",
    subcategory: "happiness",
  },
  {
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
    category: "life",
    subcategory: "meaning",
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    category: "life",
    subcategory: "meaning",
  },
];

const TabbedQuotes: React.FC = () => {
  const [selectedTopCategory, setSelectedTopCategory] = useState<string | null>(
    null
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");

  const handleTopCategoryChange = (category: string) => {
    setSelectedTopCategory(category);
    setSelectedSubCategory("");
  };

  const handleSubCategoryChange = (subcategory: string) => {
    setSelectedSubCategory(subcategory);
  };

  const topCategoryQuotes = selectedTopCategory
    ? quotes.filter((quote) => quote.category === selectedTopCategory)
    : [];

  const subcategories = selectedTopCategory
    ? [...new Set(topCategoryQuotes.map((quote) => quote.subcategory))]
    : [];

  const filteredQuotes = selectedSubCategory
    ? topCategoryQuotes.filter(
        (quote) => quote.subcategory === selectedSubCategory
      )
    : topCategoryQuotes;

  return (
    <div className="flex flex-col items-center justify-between p-24">
      <h5 className="text-3xl pb-10">Quotes!</h5>
      <div className="tabs">
        <span>Category: </span>
        <button
          onClick={() => handleTopCategoryChange("inspiration")}
          className="m-1 rounded-xl focus-within:ring-4 dark:ring-pink-950 ring-pink-300"
        >
          <Button
            text="Inspiration"
            className="bg-pink-600 hover:bg-pink-500 active:bg-pink-300"
          />
        </button>
        <button
          onClick={() => handleTopCategoryChange("motivation")}
          className="m-1 rounded-xl focus-within:ring-4 dark:ring-pink-950 ring-pink-300"
        >
          <Button
            text="Motivation"
            className="bg-pink-600 hover:bg-pink-500 active:bg-pink-300"
          />
        </button>
        <button
          onClick={() => handleTopCategoryChange("life")}
          className="m-1 rounded-xl focus-within:ring-4 dark:ring-pink-950 ring-pink-300"
        >
          <Button
            text="Life"
            className="bg-pink-600 hover:bg-pink-500 active:bg-pink-300"
          />
        </button>
      </div>
      <div className="subtabs">
        <span>Filter: </span>
        {subcategories.map((subcategory, index) => (
          <button
            key={index}
            onClick={() => handleSubCategoryChange(subcategory)}
            className="m-1 rounded-xl focus-within:ring-4 dark:ring-teal-950 ring-teal-300"
          >
            <Button
              text={subcategory}
              className="bg-teal-600 hover:bg-teal-500 active:bg-teal-300"
            />
          </button>
        ))}
      </div>
      <div className="quote-cards">
        {filteredQuotes.map((quote, index) => (
          <Card quoteTxt={quote.text} source={quote.author} />
        ))}
      </div>
    </div>
  );
};

export default TabbedQuotes;
