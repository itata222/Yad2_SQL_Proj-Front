import React, { useState, useRef, useCallback } from "react";
import useSearchBook from "./hooks/useSearchBook";

export default function App() {
    const [query, setQuery] = useState("");
    const [pageNum, setPageNum] = useState(1);
    const { isLoading, error, books, hasMore } = useSearchBook(query, pageNum);

    const observer = useRef();
    const lastBookElementRef = useCallback(
        (node) => {
            if (isLoading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPageNum((prev) => prev + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [isLoading, hasMore]
    );

    const handleChange = (e) => {
        setQuery(e.target.value);
        setPageNum(1);
    };

    return (
        <div className="App">
            <h1>Search Book</h1>
            <input type="text" onChange={handleChange} value={query} />
            {books.map((book, i) => {
                if (books.length === i + 1) {
                    return (
                        <div key={i} ref={lastBookElementRef}>
                            {book}
                        </div>
                    );
                } else {
                    return <div key={i}>{book}</div>;
                }
            })}
            <div>{isLoading && "Loading..."}</div>
            <div>{error && "Error..."}</div>
        </div>
    );
}
