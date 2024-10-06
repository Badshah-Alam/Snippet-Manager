import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSnippet } from "../utills/snippetSlice";
import { TextField, Button, Select, MenuItem, Box } from "@mui/material";

const SnippetForm = () => {
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
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label="Snippet Name"
        value={snippetName}
        onChange={(e) => setSnippetName(e.target.value)}
        required
      />
      <TextField
        label="Code Snippet"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
        multiline
        rows={4}
      />
      <Select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        displayEmpty
        required
      >
        <MenuItem value="" disabled>
          Select Language
        </MenuItem>
        <MenuItem value="JavaScript">JavaScript</MenuItem>
        <MenuItem value="Python">Python</MenuItem>
        <MenuItem value="Java">Java</MenuItem>
        {/* Add other languages */}
      </Select>
      <Button variant="contained" type="submit">
        Create Snippet
      </Button>
    </Box>
  );
};

export default SnippetForm;
