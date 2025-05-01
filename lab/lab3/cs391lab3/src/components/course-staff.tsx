import React from "react";

interface CourseStaffProps {
    name: string;
    title: string;
    rating: number;
}

const CourseStaff: React.FC<CourseStaffProps> = ({ name, title, rating }) => {
    return (
        <div style={{ backgroundColor: "lightblue", padding: "10px", borderRadius: "5px", marginBottom: "10px" }}>
            <h2>{name}</h2>
            <p>{title}</p>
            <p>Rating: {rating}/100</p>
        </div>
    );
};

export default CourseStaff;
