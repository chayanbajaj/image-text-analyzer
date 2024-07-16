// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, Typography, TextField, Button, Grid, Paper, Snackbar } from '@mui/material';
// import MuiAlert from '@mui/material/Alert';

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// function App() {
//   const [image, setImage] = useState(null);
//   const [text, setText] = useState('');
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState('');
//   const [open, setOpen] = useState(false);

//   const validImageExtensions = ['jpeg', 'png', 'bmp', 'webp'];
// //
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];   
//      const fileExtension = file?.name.split('.').pop().toLowerCase();


//     if (file && validImageExtensions.includes(fileExtension)) {
//       setImage(file);
//       setError('');
//     } else {
//       setError('Please upload a valid image file (jpg, png, gif, bmp, webp).');
//       setOpen(true);
//       setImage(null);
//     }
//   };

//   const handleTextChange = (e) => {
//     setText(e.target.value); 
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!image) {
//       setError('Please upload an image.');
//       setOpen(true);
//       return;
//     }
//     if (!text) {
//       setError('Please enter some text.');
//       setOpen(true);
//       return;
//     }
//     const formData = new FormData();
//     formData.append('image', image);
//     formData.append('text', text);

//     try {
//       const res = await axios.post('http://localhost:5000/api/analyze', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
      
//       setResult(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Container maxWidth="sm">
//       <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
//         <Typography variant="h4" gutterBottom>
//           Image and Text Analysis
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={2} alignItems="center">
//             <Grid item xs={12}>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 style={{ display: 'none' }}
//                 id="image-upload"
//               />
//               <label htmlFor="image-upload">
//                 <Button variant="contained" component="span">
//                   Upload Image
//                 </Button>
//                 {image && <p>{image.name}</p>}
//               </label>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 multiline
//                 rows={4}
//                 variant="outlined"
//                 label="Enter Text"
//                 value={text}
//                 onChange={handleTextChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button type="submit" variant="contained" color="primary">
//                 Analyze
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//         {result && (
//           <div style={{ marginTop: '20px' }}>
//             <Typography variant="h5" gutterBottom>
//               Analysis Result
//             </Typography>
//             <pre>Text: {result.text}</pre>
//             <pre>ImageText: {result.imageText}</pre>
//           </div>
//         )}
//         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//         <Alert onClose={handleClose} severity="error">
//           {error}
//         </Alert>
//       </Snackbar>
//       </Paper>
//     </Container>
//   );
// }

// export default App;

import React from 'react'
import ImageUploadUi from './components/imageUploadUi'

export default function App() {
  return (
    <div>
    <ImageUploadUi/>
  </div>
  )
}
