import './App.css'
import CourseStaff from "./components/course-staff";

function App() {
  return (
      <div>
          <h1>Welcome to React!</h1>
          <CourseStaff name="Taymaz" title="Professor" rating={92} />
          <CourseStaff name="Jeffrey" title="Teaching Assistant" rating={90} />
          <CourseStaff name="Sadiq" title="Course Assistant" rating={90} />
          <CourseStaff name="Ale" title="Course Assistant" rating={90} />
      </div>
  );
}

export default App;


