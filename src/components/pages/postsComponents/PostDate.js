import React from "react";
const PostDate = ({date}) => {
    
  return (
    <span>
        {
            new Date(date).toLocaleString("hr-HR",{
                year: "2-digit",
                month: "long",
                day: "numeric"
            })
        }
    </span>
  );
};
export default PostDate;