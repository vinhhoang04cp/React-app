import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function About() {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="container py-5">
          <h1 className="text-center mb-4">About Us</h1>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <p className="lead">
                Welcome to our company! We are dedicated to providing the best services
                and solutions to our customers.
              </p>
              <p>
                Our mission is to deliver innovative and high-quality products while
                maintaining the highest standards of customer service.
              </p>
              <div className="mt-4">
                <h3>Our Values</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ Customer Satisfaction</li>
                  <li className="mb-2">✓ Innovation</li>
                  <li className="mb-2">✓ Integrity</li>
                  <li className="mb-2">✓ Excellence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About