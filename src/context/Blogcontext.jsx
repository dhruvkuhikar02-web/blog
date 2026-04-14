import { createContext, useEffect, useState } from "react";

import {blogs} from '../assets/blog.js'
export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blog, setBlog] = useState([]);
   useEffect(()=>{
    setBlog(blogs)
   },[])
    const value = {blog}

    return (
        <BlogContext.Provider value={ value }>
            {children}
        </BlogContext.Provider>
    );
}