import { useState, useEffect } from "react";

// Icons
import { IoIosPlay } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageNames, setImageNames] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/galleri/img")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setImageNames(data);
      })
      .catch((error) => console.error("Error fetching image names:", error));
  }, []);

  const prevImg = () => {
    const isFirstImg = currentIndex === 0;
    const newIndex = isFirstImg ? imageNames.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImg = () => {
    const isLastImg = currentIndex === imageNames.length - 1;
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
    handleUpload();
    setFile(null);
    window.location.reload();
  };

  return (
    <div className="w-[1800px] h-[1080px]   relative bg-black">
      <div style={{ backgroundImage: `url(/img/${imageNames[currentIndex]})` }} className="w-full bg-cover h-full bg-center duration-500">
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
          <div className="mr-10 mt-1">
            <MdOutlineKeyboardArrowLeft onClick={prevImg} cursor="pointer" size="2rem" />
          </div>
          <div className="mt-[8px] ">
            <IoIosPlay size="1.5rem" />
          </div>
          <div className="ml-10 mt-1">
            <RiArrowRightSLine onClick={nextImg} cursor="pointer" size="2rem" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Slider;
