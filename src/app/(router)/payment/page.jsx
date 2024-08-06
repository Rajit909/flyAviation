"use client";

import React, { useState, useEffect } from "react";
import { toast } from "sonner";

const CourseFeeCalculator = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [fee, setFee] = useState(0);
  const [installments, setInstallments] = useState([]);
  const [payable, setPayable] = useState("Please select Course Above");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const courses = [
    { name: "Diploma in Hotel Management", 
      feePlan: {
        "3 Months": 45000,
        "6 Months": 90000,
        "11 Months": 110000,
      },
    },
    { name: "Diploma in Air hostess", 
      feePlan: {
        "3 Months": 50000,
        "6 Months": 95000,
        "11 Months": 115000,
      },
    },
    { name: "Diploma in Cabin crew", 
      feePlan: {
        "3 Months": 40000,
        "6 Months": 76000,
        "11 Months": 91000,
      }, 
    },
    { name: "Diploma in Airport Management", 
      feePlan: {
        "3 Months": 39000,
        "6 Months": 73000,
        "11 Months": 93000,
      },
    },
    { name: "Diploma in Travel & Tourism Management",
      feePlan: {
        "3 Months": 40000,
        "6 Months": 71000,
        "11 Months": 91000,
      },
       },
    { name: "Diploma in Human Resources Management",
      feePlan: {
        "3 Months": 20000,
        "6 Months": 35000,
        "11 Months": 60000,
      },
      },
    { name: "Diploma in Marketing Management", 
      feePlan: {
        "3 Months": 30000,
        "6 Months": 45000,
        "11 Months": 70000,
      },
     },
    { name: "Diploma in Web Designing", 
      feePlan: {
        "3 Months": 35000,
        "6 Months": 60000,
        "11 Months": 80000,
      },
     },
    { name: "Diploma in Metro Management", 
      feePlan: {
        "3 Months": 40000,
        "6 Months": 70000,
        "11 Months": 110000,
      },
    },
  ];

  const handleCourseChange = (e) => {
    const selectedCourseName = e.target.value;
    setSelectedCourse(selectedCourseName);
    const course = courses.find(
      (course) => course.name === selectedCourse
    );
    if(course){
      setSelectedPlan("3 Months"); //default to the first fee plan
      setFee(course.feePlan["3 Months"])
      setInstallments([])
      displayInstallments(course.feePlan["3 Months"], 3);    
    }else{
      setFee(0)
      setInstallments([])
    }
  };

  // handleplan change
  const handlePlanChange = (e) => {
    const selectedPlanName = e.target.value;
    setSelectedPlan(selectedPlanName);
    const course = courses.find((course) => course.name === selectedCourse);
    if (course) {
      setFee(course.feePlan[selectedPlanName]);
      const duration = parseInt(selectedPlanName.split(" ")[0], 10);
      displayInstallments(course.feePlan[selectedPlanName], duration)
    }
  };
    //display installments 
    const displayInstallments = (totalFee, duration) => {
      const monthlyInstallment = Math.floor(totalFee / duration);
      const newInstallments = [];
      for (let i = 1; i <= duration; i++) {
        newInstallments.push(`Installment ${i}: ₹${monthlyInstallment}`)        
      }
      setInstallments(newInstallments);
      setPayable(monthlyInstallment)
  };

  const handlePayment = async () => {
    const response = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: payable, name: name, email: email }),
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
        contact: "Contact number",
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
          <label htmlFor="plan" className="text-dark mb-2">
          Select Course Plan
          </label>
          <select
            id="plan"
            name="plan"
            className="form-control"
            value={selectedPlan}
            onChange={handlePlanChange}
          >
            <option value="" hidden>Select Course Plan</option>
           {
            selectedCourse && 
              Object.keys(courses.find((course) => course.name === selectedCourse).feePlan).map((plan) => (
                <option key={plan} value={plan}>
                  {plan}
                </option>
              ))
           }
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
          <label htmlFor="installments" className="text-dark mb-2">
            Installments
          </label>
          <div id="installments" className="border border-secondry rounded p-3">
            {installments.map((installment, index) => (
              <div key={index}>{installment}</div>
            ))}
          </div>
          <div className="py-2">
            Total Payable installment: {" "}
            <span className="font-weight-bold text-primary border px-2 rounded-sm">
              {
                payable
              }
            </span>
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
