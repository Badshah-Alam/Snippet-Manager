import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSnippet, editSnippet } from "../utills/snippetSlice";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  TextField,
  Box,
  Checkbox,
  FormControlLabel,
  Chip,
  CardActions,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"; 

const SnippetList = () => {
  const snippets = useSelector((state) => state.snippets.snippets);
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSnippets, setSelectedSnippets] = useState([]);
  const [editingSnippetId, setEditingSnippetId] = useState(null);
  const [editedSnippetName, setEditedSnippetName] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredSnippets = snippets.filter(
    (snippet) =>
      snippet.snippetName.toLowerCase().includes(searchQuery) ||
      snippet.language.toLowerCase().includes(searchQuery) ||
      snippet.code.toLowerCase().includes(searchQuery)
  );

  const handleDelete = (id) => {
    dispatch(deleteSnippet(id));
  };

  const handleEdit = (id, newName) => {
    dispatch(editSnippet({ id, updatedSnippet: { snippetName: newName } }));
    setEditingSnippetId(null);
  };

  const toggleSelect = (id) => {
    setSelectedSnippets((prev) =>
      prev.includes(id)
        ? prev.filter((snippetId) => snippetId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedSnippets(snippets.map((snippet) => snippet.id));
    } else {
      setSelectedSnippets([]);
    }
  };

  const handleDeleteSelected = () => {
    selectedSnippets.forEach((id) => handleDelete(id));
    setSelectedSnippets([]);
  };

  return (
    <Box sx={{ width: "100%", padding: "0 20px", margin: "0 auto" }}>
     
      <TextField
        label="Search Snippets"
        value={searchQuery}
        onChange={handleSearchChange}
        fullWidth
        sx={{
          marginBottom: 2,
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            "& fieldset": {
              borderColor: "#ccc", 
            },
            "&:hover fieldset": {
              borderColor: "#888", 
            },
            "&.Mui-focused fieldset": {
              borderColor: "#3f51b5", 
            },
          },
        }}
        InputProps={{
       
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{ color: "#aaa" }} /> 
            </InputAdornment>
          ),
        }}
      />

      {/* Select All checkbox aligned to the right */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedSnippets.length === snippets.length}
              onChange={handleSelectAll}
            />
          }
          label="Select All"
        />
      </Box>

      <Grid container spacing={2}>
        {filteredSnippets.length ? (
          filteredSnippets.map((snippet) => (
            <Grid item xs={12} sm={6} md={4} key={snippet.id}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                   
                    {editingSnippetId === snippet.id ? (
                      <TextField
                        value={editedSnippetName}
                        onChange={(e) => setEditedSnippetName(e.target.value)}
                        onBlur={() => handleEdit(snippet.id, editedSnippetName)}
                        autoFocus
                        fullWidth
                      />
                    ) : (
                      <Typography
                        variant="h5"
                        onDoubleClick={() => {
                          setEditingSnippetId(snippet.id);
                          setEditedSnippetName(snippet.snippetName);
                        }}
                      >
                        {snippet.snippetName}
                      </Typography>
                    )}

                   
                    <Checkbox
                      checked={selectedSnippets.includes(snippet.id)}
                      onChange={() => toggleSelect(snippet.id)}
                    />
                  </Box>

                  {/* Placeholder for Snippet Image */}
                  <Box
                    sx={{
                      height: 120,
                      backgroundColor: "#e0e0e0",
                      margin: "10px 0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body2">[Image Placeholder]</Typography>
                  </Box>

                
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    <Chip label="ReactJs" color="primary" />
                    <Chip label="JavaScript" color="secondary" />
                    <Chip label="NodeJs" color="success" />
                  </Box>

               
                  <Typography variant="body2" paragraph sx={{ marginTop: 2 }}>
                    {snippet.code.slice(0, 100)}{" "}
                    {/* Show a snippet preview */}
                  </Typography>
                </CardContent>

        
                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(snippet.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => setEditingSnippetId(snippet.id)}
                  >
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No snippets available.</Typography>
        )}
      </Grid>

     
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          color="error"
          onClick={handleDeleteSelected}
          disabled={selectedSnippets.length === 0}
        >
          Delete Selected
        </Button>
      </Box>
    </Box>
  );
};

export default SnippetList;
