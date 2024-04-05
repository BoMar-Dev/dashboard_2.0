const fetchImgEndpoint = "http://localhost:3001/api/galleri/img"
const postImgEndpoint = "http://localhost:3001/api/galleri"


// G E T 
 export const fetchtImgs = async (setImageNames) => {

    fetch(fetchImgEndpoint)
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

  };


  // P O S T 
   export const handleImgUpload = async (file) => {
        if (file) {
          const formData = new FormData();
          formData.append("image", file);
    
          try {
            const response = await fetch( postImgEndpoint, {
              method: "POST",
              body: formData,
            });
    
            // Handle response
          } catch (error) {
            console.error("Error uploading file:", error);
          }
        }
      };

