import JobApplicationForm from "./components/JobApplicationForm";

const styles = {
  textAlign: "center",
  margin: "20px 0px 10px 0px",
};

const App = () => {
  return (
    <div className="App">
      <h1 style={styles}>Job Application Form</h1>
      <JobApplicationForm />
    </div>
  );
};

export default App;
