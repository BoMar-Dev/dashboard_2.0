// import { useState } from "react";
// import axios from "axios";

// // installera multer och använd i backend

// function ImgUploader() {
//   const [file, setFile] = useState();
//   const upload = () => {
//     const formData = new FormData();
//     formData.append("file", file);
//     axios
//       .post("http://localhost:3001/galleri/upload", formData)
//       .then((res) => {})
//       .catch((er) => console.log(er));
//   };
//   return (
//     <div>
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <button type="button" onClick={upload}>
//         Upload
//       </button>
//     </div>
//   );
// }

// export default ImgUploader;
