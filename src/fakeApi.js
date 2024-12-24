// src/fakeApi.js
export const getGalleryItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Momo", img: "/images/axie1.jpg" },
        { id: 2, title: "Zom Ninja", img: "/images/axie2.jpg" },
        { id: 3, title: "ClownZ", img: "/images/Axie3.jpg" },
      ]);
    }, 1000); // Simulates a 1-second delay
  });
};
