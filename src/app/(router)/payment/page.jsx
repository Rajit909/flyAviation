"use client";

import React, { useState, useEffect } from "react";
import { toast } from "sonner";

const CourseFeeCalculator = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [fee, setFee] = useState(0);
  const [emiOptions, setEmiOptions] = useState([]);
  const [selectedEmi, setSelectedEmi] = useState("");
  const [totalFee, setTotalFee] = useState(0);
  const [installments, setInstallments] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const courses = [
    { name: "Diploma in Hotel Management", fee: 45000 },
    { name: "Diploma in Air hostess", fee: 50000 },
    { name: "Diploma in Cabin crew", fee: 40000 },
    { name: "Diploma in Airport Management", fee: 39000 },
    { name: "Diploma in Travel & Tourism Management", fee: 40000 },
    { name: "Diploma in Human Resources Management", fee: 20000 },
    { name: "Diploma in Marketing Management", fee: 30000 },
    { name: "Diploma in Web Designing", fee: 35000 },
    { name: "Diploma in Metro Management", fee: 40000 },
  ];

  const handleCourseChange = (e) => {
    const selectedCourseName = e.target.value;
    setSelectedCourse(selectedCourseName);
    const selectedCourse = courses.find(
      (course) => course.name === selectedCourseName
    );
    if (selectedCourse) {
      setFee(selectedCourse.fee);
      setSelectedEmi("");
      setTotalFee(0);
      setInstallments([]);
      fetchEmiOptions(selectedCourse.fee);
    } else {
      setFee(0);
      setEmiOptions([]);
      setSelectedEmi("");
      setTotalFee(0);
      setInstallments([]);
    }
  };

  const fetchEmiOptions = (amount) => {
    const emiOptions = [{ duration: 3 }];

    setEmiOptions(emiOptions);
  };

  const handleEmiChange = (e) => {
    const selectedEmi = e.target.value;
    setSelectedEmi(selectedEmi);
    if (selectedEmi) {
      const duration = parseInt(selectedEmi, 10);
      const monthlyInstallment = Math.floor(fee / duration);
      setTotalFee(monthlyInstallment);
      displayInstallments(monthlyInstallment, duration);
    } else {
      setTotalFee(monthlyInstallment);
      setInstallments([]);
    }
  };

  const displayInstallments = (monthlyInstallment, duration) => {
    const newInstallments = [];
    for (let i = 1; i <= duration; i++) {
      newInstallments.push(`Installment ${i}: ₹${monthlyInstallment}`);
    }
    setInstallments(newInstallments);
  };

  const handlePayment = async () => {
    const response = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: totalFee, name: name, email: email }),
    });
    const order = await response.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // client-side key
      amount: order.amount,
      currency: "INR",
      name: "FlyAviation Academy: Course Fee Payment",
      description: "Payment for selected course",
      order_id: order.id,
      handler: async (response) => {
        // Payment was successful
        // alert(`Payment successful.  Transaction ID: ${response.razorpay_payment_id}`);
        toast(
          "Payment successful.  Transaction ID: " + response.razorpay_payment_id
        );
      },
      prefill: {
        name: name,
        email: email,
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="container mt-5 p-4 bg-white border border-secondry rounded shadow-sm">
      <h2 className="h4 font-weight-bold mb-4">
        Pay your fee to complete registration.
      </h2>
      <form id="paymentForm">
        <div className="form-group mb-3">
          <label htmlFor="course" className="text-dark mb-2">
            Select Course
          </label>
          <select
            id="course"
            name="course"
            className="form-control"
            value={selectedCourse}
            onChange={handleCourseChange}
          >
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course.name} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="fee" className="text-dark mb-2">
            Course Fee
          </label>
          <input
            type="text"
            id="fee"
            name="fee"
            className="form-control"
            value={fee}
            readOnly
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="emi" className="text-dark mb-2">
            Select EMI Plan
          </label>
          <select
            id="emi"
            name="emi"
            className="form-control"
            value={selectedEmi}
            onChange={handleEmiChange}
          >
            <option value="">Select EMI Option</option>
            {emiOptions.map((option) => (
              <option key={option.duration} value={option.duration}>
                {option.duration} months
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="totalFee" className="text-dark mb-2">
            Total Fee
          </label>
          <input
            type="text"
            id="totalFee"
            name="totalFee"
            className="form-control"
            value={totalFee.toFixed(2)}
            readOnly
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="installments" className="text-dark mb-2">
            Installments
          </label>
          <div id="installments" className="border border-secondry rounded p-3">
            {installments.map((installment, index) => (
              <div key={index}>{installment}</div>
            ))}
          </div>
        </div>
        <div className="border border-secondry rounded p-3 mb-2">
          <small id="passwordHelpBlock" className="form-text text-warning">
            Enter name and Email to recive a recipt on your mail.
          </small>
          <div className="form-group mb-3">
            <label htmlFor="name" className="text-dark mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter full name"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email" className="text-dark mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handlePayment}
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default CourseFeeCalculator;
