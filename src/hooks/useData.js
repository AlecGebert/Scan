import { useState } from "react";

export default function useData() {
  const getData = () => {
    const dataString = localStorage.getItem("data");
    const userData = JSON.parse(dataString);
    return userData;
  };

  const [data, setdata] = useState(getData());

  const saveData = (userData) => {
    localStorage.setItem("data", JSON.stringify(userData));
    setdata(userData.data);
  };

  return {
    setdata: saveData,
    data,
  };
}
