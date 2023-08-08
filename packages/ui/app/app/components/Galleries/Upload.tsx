// import React from 'react';

// const Upload = () => {
//   return (
//     <div>
//       Upload: should implement a drag and drop file upload should implement a file click to button and additionally an
//       input field for situtaions where the user wants to upload a file from a different location
//     </div>
//   );
// };

// export default Upload;


// import React, { useState } from 'react';

// const Upload = () => {
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [udlTag, setUdlTag] = useState('<UDL>Default UDL Tag</UDL>');
//   const [imageUrl, setImageUrl] = useState('');

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setUploadedImage(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const file = event.dataTransfer.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setUploadedImage(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleUrlImport = () => {
//     if (!imageUrl) return;

//     fetch(imageUrl)
//       .then((response) => response.blob())
//       .then((blob) => {
//         const reader = new FileReader();

//         reader.onloadend = () => {
//           setUploadedImage(reader.result);
//         };

//         reader.readAsDataURL(blob);
//       })
//       .catch((error) => console.error('Error fetching image:', error));
//   };

//   const handleUdlEdit = (event) => {
//     setUdlTag(event.target.value);
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//       <div style={{ border: '1px solid #ccc', padding: '40px', borderRadius: '10px', width: '80%' }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <div>
//           <h2>Upload Image:</h2>
//           <input type="file" onChange={handleImageUpload} />
//           <br />
//           <br />
//           <h2>Or</h2>
//           <p>Drag and drop your file here:</p>
//           <div
//             style={{
//               border: '2px dashed #ccc',
//               borderRadius: '5px',
//               width: '200px',
//               height: '100px',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//             onDragOver={(event) => handleDragOver(event)}
//             onDrop={(event) => handleDrop(event)}
//           >
//             Drop File Here
//           </div>
//           <br />
//           <p>Or</p>
//           <input
//             type="url"
//             placeholder="Enter Image URL"
//             value={imageUrl}
//             onChange={(e) => setImageUrl(e.target.value)}
//           />
//           <button onClick={handleUrlImport}>Import from URL</button>
//         </div>
//         <div>
//           <h2>UDL Editor:</h2>
//           <textarea
//             rows={10}
//             cols={30}
//             value={udlTag}
//             onChange={handleUdlEdit}
//           />
//         </div>
//       </div>
//       {uploadedImage && (
//         <div>
//           <h2>Uploaded Image:</h2>
//           <img src={uploadedImage} alt="Uploaded" width="300" />
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default Upload;

import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  ChakraProvider,
  Image,
} from '@chakra-ui/react';

const Upload = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [udlTag, setUdlTag] = useState('<UDL>Default UDL Tag</UDL>');
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUrlImport = () => {
    if (!imageUrl) return;

    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();

        reader.onloadend = () => {
          setUploadedImage(reader.result);
        };

        reader.readAsDataURL(blob);
      })
      .catch((error) => console.error('Error fetching image:', error));
  };

  const handleUdlEdit = (event) => {
    setUdlTag(event.target.value);
  };

  return (
    <ChakraProvider>
    <Container maxW="1000px" py="8" rounded="lg" shadow="lg">
      <Flex direction="column" align="center" justify="center">
        <Heading as="h2" size="lg" mb="4">
          Upload Image
        </Heading>
        <Input type="file" onChange={handleImageUpload} mb="2" />
        <Text>Or</Text>
        <Box
          border="2px dashed #ccc"
          borderRadius="md"
          p="6"
          my="2"
          w="200px"
          h="100px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onDragOver={(event) => handleDragOver(event)}
          onDrop={(event) => handleDrop(event)}
        >
          Drop File Here
        </Box>
        <Divider my="4" />
        <Input
          type="url"
          placeholder="Enter Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          mb="2"
        />
        <Button colorScheme="blue" onClick={handleUrlImport} mb="4">
          Import from URL
        </Button>
      </Flex>
      <Divider my="6" />
      <Flex direction="column" align="center" justify="center">
        <Heading as="h2" size="lg" mb="4">
          UDL Editor
        </Heading>
        <Textarea
          rows={10}
          cols={30}
          value={udlTag}
          onChange={handleUdlEdit}
        />
      </Flex>
      {uploadedImage && (
        <Flex direction="column" align="center" justify="center" mt="6">
          <Heading as="h2" size="lg" mb="4">
            Uploaded Image
          </Heading>
          <Box maxW="300px">
            <Image src={uploadedImage} alt="Uploaded" />
          </Box>
        </Flex>
      )}
    </Container>
    </ChakraProvider>
  );
};

export default Upload;
