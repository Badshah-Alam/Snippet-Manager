// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addSnippet } from "../utills/snippetSlice";
// import { TextField, Button, Select, MenuItem, Box } from "@mui/material";

// const CreateSnippet = () => {
//   const [snippetName, setSnippetName] = useState("");
//   const [code, setCode] = useState("");
//   const [language, setLanguage] = useState("");
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const snippet = { id: Date.now(), snippetName, code, language };
//     dispatch(addSnippet(snippet));
//     setSnippetName("");
//     setCode("");
//     setLanguage("");
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         gap: 2,
//         width: { xs: "90%", sm: "70%", md: "50%" },
//         margin: "auto",
//         marginTop: "20px",
//       }}
//     >
//       <TextField
//         label="Snippet Name"
//         value={snippetName}
//         onChange={(e) => setSnippetName(e.target.value)}
//         required
//         fullWidth
//       />
//       <TextField
//         label="Code Snippet"
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//         required
//         multiline
//         rows={4}
//         fullWidth
//       />
//       <Select
//         value={language}
//         onChange={(e) => setLanguage(e.target.value)}
//         displayEmpty
//         required
//         fullWidth
//       >
//         <MenuItem value="" disabled>
//           Select Language
//         </MenuItem>
//         <MenuItem value="JavaScript">JavaScript</MenuItem>
//         <MenuItem value="Python">Python</MenuItem>
//         <MenuItem value="Java">Java</MenuItem>
//       </Select>
//       <Button variant="contained" type="submit" fullWidth>
//         Create Snippet
//       </Button>
//     </Box>
//   );
// };

// export default CreateSnippet;


import React, { useState } from "react"; 
import { useDispatch } from "react-redux";
import { addSnippet } from "../utills/snippetSlice";
import { TextField, Button, Select, MenuItem, Box, Typography } from "@mui/material";

const CreateSnippet = () => {
  const [snippetName, setSnippetName] = useState("");
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const snippet = { id: Date.now(), snippetName, code, language };
    dispatch(addSnippet(snippet));
    setSnippetName("");
    setCode("");
    setLanguage("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: { xs: "90%", sm: "70%", md: "50%" },
        margin: "auto",
        marginTop: "20px",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: 3, // Adding a subtle shadow for better visibility
        backgroundColor: "#fff", // White background for contrast
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 2 }}>
        Create a New Snippet
      </Typography>

      <TextField
        label="Snippet Name"
        value={snippetName}
        onChange={(e) => setSnippetName(e.target.value)}
        required
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px', // Rounded corners
          },
        }}
      />
      <TextField
        label="Code Snippet"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
        multiline
        rows={4}
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px', // Rounded corners
          },
        }}
      />
      <Select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        displayEmpty
        required
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px', // Rounded corners
          },
        }}
      >
        <MenuItem value="" disabled>
          Select Language
        </MenuItem>
        <MenuItem value="JavaScript">JavaScript</MenuItem>
        <MenuItem value="Python">Python</MenuItem>
        <MenuItem value="Java">Java</MenuItem>
      </Select>
      <Button variant="contained" type="submit" fullWidth sx={{ borderRadius: '8px' }}>
        Create Snippet
      </Button>
    </Box>
  );
};

export default CreateSnippet;
