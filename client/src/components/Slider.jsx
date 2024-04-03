import { useState } from "react";

import imgTest from "./../../public/img/unsplashed3.jpg";

// Icons
import { IoIosPlay } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [file, setFile] = useState(null);

  const imgs = [
    {
      url: imgTest,
    },
    {
      url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?q=80&w=1358&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const prevImg = () => {
    const isFirsImg = currentIndex === 0;
    const newIndex = isFirsImg ? imgs.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextImg = () => {
    const isLastImg = currentIndex === imgs.length - 1;
    const newIndex = isLastImg ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch("http://localhost:3001/api/galleri", {
          method: "POST",
          body: formData,
        });

        // Handle response
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const handleUploadAndReload = () => {
    handleUpload(); // Call handleUpload function
    setFile(null); // Clear the selected file state
    window.location.reload(); // Reload the page
  };

  return (
    <div className="w-[1800px] h-[1080px]   relative bg-black">
      <div style={{ backgroundImage: `url(${imgs[currentIndex].url})` }} className="w-full bg-cover h-full bg-center duration-500">
        <div className="p-5">
          <div>
            <label htmlFor="file" className="sr-only">
              Choose a file
            </label>
            <input id="file" type="file" onChange={handleFileChange} />
          </div>
          {file && (
            <section>
              File details:
              <ul>
                <li>Name: {file.name}</li>
                <li>Type: {file.type}</li>
                <li>Size: {file.size} bytes</li>
              </ul>
            </section>
          )}

          {file && (
            <button className="bg-customBlue p-1 " onClick={handleUploadAndReload}>
              Ladda upp{" "}
            </button>
          )}
        </div>
        <footer className="flex h-10 bg-gray-500 justify-center  absolute bottom-0 w-full">
          {/* Right arrow  */}
          <div className="mr-10 mt-1">
            <MdOutlineKeyboardArrowLeft onClick={prevImg} cursor="pointer" size="2rem" />
          </div>
          {/* // Play */}
          <div className="mt-[8px] ">
            <IoIosPlay size="1.5rem" />
          </div>
          <div className="ml-10 mt-1">
            {/* Left arrow  */}
            <RiArrowRightSLine onClick={nextImg} cursor="pointer" size="2rem" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Slider;
