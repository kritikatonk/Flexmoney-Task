// import './App.css'
import React from 'react'
  import { ToastContainer,} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import bg from './images/bg-2.png'
import Register from './components/register';
import Payment from './components/payment';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
function App() {
  return (
    <Router>
<div className="App" >
<section className="min-vh-100"   style={{background: "linear-gradient(to bottom right, rgba(240, 147, 251, 1), rgba(245, 87, 108, 1))"}}>
        <div className="container h-100 ">
            <div className="row d-flex justify-content-center align-items-center min-vh-100 ">
            <div className="col-lg-12 col-xl-11 ">
              <div className="card text-black" style={{borderRadius: '25px'}}>
                <div className="card-body">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-1">
                      <img src={bg} className="img-fluid" alt="Sample" />
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-2">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Yoga Fitness Institute</p>
                      <Routes>
                      <Route exact path="/" element= {<Register/>} />
                      <Route exact path="/payment" element= {<Payment/>} />
                      </Routes>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
      </section>
      <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
</div>
</Router>
  );
}

export default App;
