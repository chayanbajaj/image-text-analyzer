import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Grid, Paper, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ImageUploadUi() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [msg, setMsg] = useState('');
  const [open, setOpen] = useState(false);
  const  [severity, setSeverity] = useState('');
  const validImageExtensions = ['jpeg', 'png', 'bmp', 'webp'];

  const handleImageChange = (e) => {
    const file = e.target.files[0];   
     const fileExtension = file?.name.split('.').pop().toLowerCase();


    if (file && validImageExtensions.includes(fileExtension)) {
      setImage(file);
      setMsg('');
    } else {
        setMsg('Please upload a valid image file (jpg, png, gif, bmp, webp).');
        setSeverity('error');
      setOpen(true);
      setImage(null);
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
        setMsg('Please upload an image.');
      setSeverity('error');
      setOpen(true);
      return;
    }
    if (!text) {
        setMsg('Please enter some text.');
      setSeverity('error');
      setOpen(true);
      return;
    }
    const formData = new FormData();
    formData.append('image', image);
    formData.append('text', text);

    try {
      const res = await axios.post('http://localhost:5000/api/analyze', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      
      setResult(res.data);
      setMsg('Analysis completed.');
      setSeverity('success');
      setOpen(true);
    } catch (err) {
      console.error(err);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Image Analysis
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sx={{ textAlign: 'right' }}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                id="image-upload"
              />
              <label htmlFor="image-upload">
                <Button variant="contained" component="span" color="secondary">
                  Upload Image
                </Button>
                {image && <p>{image.name}</p>}
              </label>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={2}
                variant="outlined"
                label="Enter Text"
                value={text}
                onChange={handleTextChange}
                required
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'right' }}>
              <Button type="submit" variant="contained" color="success">
                Analyze
              </Button>
            </Grid>
          </Grid>
        </form>
        {result && (
          <div style={{ marginTop: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Analysis Result
            </Typography>
            <pre style={{ whiteSpace: 'pre-wrap',fontSize: '15px' }}>Text: {result.text}</pre>
            <pre style={{ whiteSpace: 'pre-wrap',fontSize: '15px' }}>ImageText: {result.imageText}</pre>
          </div>
        )}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {msg}
        </Alert>
      </Snackbar>
      </Paper>
    </Container>
  );
}

export default ImageUploadUi;
