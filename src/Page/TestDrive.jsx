// import "./Navbar.css";

const TestDrive = () => {
  return (
   <center> <section className="testdrive">
      <div className="testdrive-card">
        <h1>Book a Test Drive</h1>
        <p>Fill the form and our team will contact you shortly.</p>

        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Car Model" required />
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </section></center>
  );
};

export default TestDrive;
