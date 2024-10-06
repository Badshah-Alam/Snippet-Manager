import React from "react";
import { Container, Typography } from "@mui/material";

const SnippetManager = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Snippet Manager
      </Typography>
      <Typography variant="body1" paragraph>
        Snippet Manager is a powerful web application created to help developers efficiently manage their code snippets. It's designed to streamline the process of storing, editing, and organizing reusable code, making coding tasks faster and more productive.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Technologies Used:
      </Typography>
      <Typography variant="body1" paragraph>
        - **Programming Language:** JavaScript  
        - **Library:** React.js  
        - **State Management:** Redux Toolkit for handling the app's global state and data flow efficiently  
        - **Design:** Material UI for building a clean, responsive, and modern user interface  
      </Typography>
      <Typography variant="body1" paragraph>
        The app is built using React.js, which ensures fast and responsive user interfaces, making it ideal for interactive applications like Snippet Manager. For data management, Redux Toolkit is used to handle state efficiently across the application. Additionally, Material UI is leveraged for creating sleek, professional-looking components, offering a smooth user experience across all devices.
      </Typography>
    </Container>
  );
};

export default SnippetManager;
