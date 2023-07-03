import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const posts = [
       {
      title: 'Card 1',
      img: 'https://via.placeholder.com/300',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
     {
      title: 'Card 2',
      img: 'https://via.placeholder.com/300',
      content: 'Suspendisse ut purus eu felis pharetra imperdiet vitae id leo.',
    },
  
    {
        title: 'Card 3',
        img: 'https://via.placeholder.com/300',
        content: 'Suspendisse ut purus eu felis pharetra imperdiet vitae id leo.',
      },
      {
        title: 'Card 4',
        img: 'https://via.placeholder.com/300',
        content: 'Suspendisse ut purus eu felis pharetra imperdiet vitae id leo.',
      },
      {
        title: 'Card 5',
        img: 'https://via.placeholder.com/300',
        content: 'Suspendisse ut purus eu felis pharetra imperdiet vitae id leo.',
      },
      {
        title: 'Card 6',
        img: 'https://via.placeholder.com/300',
        content: 'Suspendisse ut purus eu felis pharetra imperdiet vitae id leo.',
      },
  ];

  const handleButtonClick = (post) => {
    // Handle button click for the specific post
    console.log(`Button clicked for post: ${post.title}`);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <h2 className="text-2xl font-bold mb-4 text-center ">Card Slider</h2>
      <Slider {...settings}>
        {posts.map((post, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg">
              <img className="w-full h-48 object-cover rounded-t-lg" src={post.img} alt={post.title} />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
                <p className="text-gray-600">{post.content}</p>
                <button
                  className="px-4 py-2 mt-4 text-sm text-white bg-blue-500 rounded shadow"
                  onClick={() => handleButtonClick(post)}
                >
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
