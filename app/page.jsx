'use client';
import { useState } from 'react';

export default function UseParamsPage() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const dropdownContent = [
    {
      title: 'What is useParams?',
      content: `The useParams hook in Next.js allows you to access the dynamic route parameters of a page. 
                It returns an object containing the key-value pairs of the parameters, making it easy to retrieve and 
                use them within your components.`,
    },
    {
      title: 'Why useParams?',
      content: `It's useful for accessing dynamic route parameters, which simplifies the process of building dynamic and interactive pages based on URL segments. It helps retrieve parameters directly from the URL, allowing developers to create more dynamic and responsive applications without manually parsing the URL. For example,
                Suppose you're building an e-commerce website where each product has its own detail page. You could use the useParams hook to fetch the product ID from the URL and then use this ID to retrieve and display the relevant product information.`,
    },
    {
      title: 'Active Dynamic Segment',
      content: 'Each property in the object is an active dynamic segment.',
    },
    {
      title: 'Property Name and Value',
      content: `The properties name is the segment's name, and the properties value is what the segment is filled in with.`,
    },
    {
      title: 'String or Array of Strings',
      content: `The properties value will either be a string or array of strings depending on the type of dynamic segment. (e.g. catch-all)`,
    },
    {
      title: 'No Dynamic Parameters',
      content: `If the route contains no dynamic parameters, useParams returns an empty object.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center p-4">
      <header className="text-4xl font-bold mb-6">useParams Hook</header>
      
      <div className="w-full md:w-3/4 lg:w-1/2">
        {dropdownContent.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-md text-left transition-colors duration-200"
            >
              {item.title}
            </button>
            {openDropdown === index && (
              <div className="mt-2 p-4 bg-gray-900 rounded-md text-white">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <a
          href="https://nextjs.org/docs/app/api-reference/functions/use-params"
                    className="text-blue-400 underline mt-4 block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    useParams Docs
                  </a>
    </div>
  );
}
