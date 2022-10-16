import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Banner from "./components/Banner";
import CourseList from "./components/CourseList/CourseList";
import CoursePage from "./components/CoursePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useJsonQuery } from "./utilities/fetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseEditForm from "./components/CourseEditForm";
import { useDbData } from "./utilities/firebase";

const Main = () => {
  // const [data, isLoading, error] = useJsonQuery(
  //   "https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php"
  // );
  const [data, error] = useDbData("/");
  console.log(data);
  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (data === undefined) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;

  return (
    <div>
      <Banner title={data.title} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CoursePage courses={data.courses} />} />
          <Route path="/edit/:id" element={<CourseEditForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <Main />
      </div>
    </QueryClientProvider>
  );
};

export default App;
