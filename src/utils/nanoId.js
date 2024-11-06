import { nanoid } from "@reduxjs/toolkit";

export default function NanoId(prefix = "ncmaz_") {
  return prefix + nanoid() + "_";
}
