import axios from "axios";
import { useState } from "react";

export function Data() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  async function GetData() {
    const res = await axios.get("https://dummyjson.com/products");
    setData(res.data);
    setLoading(true);
    return data, loading;
  }
}
