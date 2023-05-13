import { Box, Button, InputAdornment, TextField } from "@mui/material";
import "./Create.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Create = () => {
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState(0);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {

    fetch(" http://localhost:3000/mydata  ", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, cost }),
  }).then(() => {
    navigate("/");
  });
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        p: "50px",
        border: "0.1px solid white",
        borderRadius: "10px",
        boxShadow: "1px 1px 8px 1px green",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <TextField
        {...register("title", { required: {value: true,  message: "Title is required"}, minLength: 
        {value: 3, message: "Title must be at least 3 characters"}, maxLength: {value: 20, message: "Title must be at most 20 characters"} })}
        onChange={(e) => setTitle(e.target.value)}
        InputProps={{
          startAdornment: <InputAdornment position="start">T</InputAdornment>,
        }}
        id="outlined-basic"
        label="Title"
        variant="outlined"
        autoComplete="off"
        error={errors.title ? true : false}
        helperText={errors.title ? errors.title?.message.toString() : null}
      />

      <TextField
        {...register("cost", { required: true })}
        onChange={(e) => setCost(Number(e.target.value))}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        id="outlined-basic"
        label="Cost"
        variant="outlined"
        autoComplete="off"
        type="number"
        error={errors.cost ? true : false}
        helperText={errors.cost ? "Cost is required" : ""}
      />
      <Button
        variant="contained"
        color="success"
        endIcon={<AddCircleIcon />}
        type="submit"
      >
        Create
      </Button>
    </Box>
  );
};

export default Create;
