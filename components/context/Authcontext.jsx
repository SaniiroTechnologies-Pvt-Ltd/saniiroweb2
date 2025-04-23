"use client";

import apiEndpoints from "@/utils/apiEndpoints";
import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext({ videos: [], categories: [] });

export const DataProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${apiEndpoints.videos}`)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data?.Data?.VideoResources);
        setCategories(data?.Data?.Classifications);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <DataContext.Provider value={{ videos, categories }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
