import React, { useState } from "react";

export default function Galleri() {
  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const handleImgUpload = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imgUrl: imgUrl }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setFile([...file, data.imgUrl]);

      console.log("New IMG Uploaded to folder and img-url saved to DB");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <div className="m-10">
        <h2>Lägg till bild :</h2>
        <input className="rounded-lg" type="file" onChange={handleChange} />
        <img src={file} />
        <button
          className="bg-customPurple w-[94px]"
          type="button"
          onClick={handleImgUpload}
        >
          Ladda upp
        </button>
      </div>
    </div>
  );
}
