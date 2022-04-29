import { useState, useEffect } from 'react';

export const usePagination = (data) => {
  const [currPage, setCurrPage] = useState(0);
  const [threshold, setThreshold] = useState(8);
  const totalPages = Math.ceil(data.length / threshold);
  const pagedData = data.slice(
    currPage * threshold,
    (currPage + 1) * threshold
  );
  console.log(threshold);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currPage]);

  useEffect(() => {
    setCurrPage(0);
  }, [data]);

  return { totalPages, setCurrPage, pagedData, currPage, setThreshold };
};
