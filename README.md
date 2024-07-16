# image-text-analyzer

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (local or Atlas)

## Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/chayanbajaj/image-text-analyzer.git
    cd image-text-analyzer
    ```

2. **Install dependencies for the backend**

    ```bash
    cd backend
    npm install
    ```

3. **Install dependencies for the client**

    ```bash
    cd client
    npm install
    ```

## Running the Application

2. **Start the backend server**

    ```bash
    cd backend
    npm run dev 
    ```

### Client

1. **Start the client server**

    ```bash
    cd client
    npm start
    ```

2. **Open your browser**

    Navigate to `http://localhost:3000` to view the application.

## Features

- **Image Upload:** Users can upload an image.
- **Text Analysis:** The application analyzes the uploaded image using an AI model or OCR to extract and recognize content.

## Technologies Used

- **Frontend:** React, Material-UI
- **Backend:** Node.js, Express.js, MongoDB
- **Image Analysis:** Tesseract

