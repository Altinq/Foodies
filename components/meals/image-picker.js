"use client";

import { useRef } from "react";
import classes from "./image-picker.module.css";
export default function ImagePicker({ label, name }) {
  const imageInput = useRef();

  function handleImagePick() {
    imageInput.current.click();
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInput}
        />
        <button
          type="button"
          className={classes.button}
          onClick={handleImagePick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
