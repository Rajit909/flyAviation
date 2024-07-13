"use client"
import React, { useState, useEffect } from 'react';

const CourseFeeCalculator = () => {
    const [selectedCourse, setSelectedCourse] = useState('');
    const [fee, setFee] = useState(0);
    const [emiOptions, setEmiOptions] = useState([]);
    const [selectedEmi, setSelectedEmi] = useState('');
    const [totalFee, setTotalFee] = useState(0);
    const [installments, setInstallments] = useState([]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const courses = [
        { name: 'Diploma in Hotel Management', fee: 40000 },
        { name: 'Diploma in Air hostess', fee: 40000 },
        { name: 'Diploma in Cabin crew', fee: 40000 },
        { name: 'Diploma in Airport Management', fee: 40000 },
        { name: 'Diploma in Travel & Tourism Management', fee: 40000 },
        { name: 'Diploma in Human Resources Management', fee: 40000 },
        { name: 'Diploma in Marketing Management', fee: 40000 },
        { name: 'Diploma in Web Designing', fee: 40000 },
        { name: 'Diploma in Metro Management', fee: 40000 },
    ];

    const handleCourseChange = (e) => {
        const selectedCourseName = e.target.value;
        setSelectedCourse(selectedCourseName);
        const selectedCourse = courses.find(course => course.name === selectedCourseName);
        if (selectedCourse) {
            setFee(selectedCourse.fee);
            setSelectedEmi('');
            setTotalFee(0);
            setInstallments([]);
            fetchEmiOptions(selectedCourse.fee);
        } else {
            setFee(0);
            setEmiOptions([]);
            setSelectedEmi('');
            setTotalFee(0);
            setInstallments([]);
        }
    };

    const fetchEmiOptions = (amount) => {
        const emiOptions = [
            { duration: 3 },
            { duration: 6 },
            { duration: 9 },
        ];

        setEmiOptions(emiOptions);
    };

    const handleEmiChange = (e) => {
        const selectedEmi = e.target.value;
        setSelectedEmi(selectedEmi);
        if (selectedEmi) {
            const duration = parseInt(selectedEmi, 10);
            const monthlyInstallment = Math.floor(fee / duration);
            setTotalFee(fee);
            displayInstallments(monthlyInstallment, duration);
        } else {
            setTotalFee(fee);
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
        const response = await fetch('/api/create-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: totalFee }),
        });
        const order = await response.json();
        
        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: 'INR',
            name: 'Course Fee',
            description: 'Payment for selected course',
            order_id: order.id,
            handler: (response) => {
                alert(`Payment successful: ${response.razorpay_payment_id}`);
            },
            prefill: {
                name: 'John Doe',
                email: 'john.doe@example.com',
                contact: '9999999999',
            },
            notes: {
                address: 'Razorpay Corporate Office',
            },
            theme: {
                color: '#3399cc',
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <div className="container mt-5 p-4 bg-white border border-secondry rounded shadow-sm">
            <h2 className="h4 font-weight-bold mb-4">Calculate Course Fee</h2>
            <form id="paymentForm">
                <div className="form-group mb-3">
                    <label htmlFor="course" className="text-dark mb-2">Select Course</label>
                    <select id="course" name="course" className="form-control" value={selectedCourse} onChange={handleCourseChange}>
                        <option value="">Select Course</option>
                        {courses.map(course => (
                            <option key={course.name} value={course.name}>{course.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="fee" className="text-dark mb-2">Course Fee</label>
                    <input type="text" id="fee" name="fee" className="form-control" value={fee} readOnly />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="emi" className="text-dark mb-2">Select EMI Plan</label>
                    <select id="emi" name="emi" className="form-control" value={selectedEmi} onChange={handleEmiChange}>
                        <option value="">Select EMI Option</option>
                        {emiOptions.map(option => (
                            <option key={option.duration} value={option.duration}>{option.duration} months</option>
                        ))}
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="totalFee" className="text-dark mb-2">Total Fee</label>
                    <input type="text" id="totalFee" name="totalFee" className="form-control" value={totalFee.toFixed(2)} readOnly />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="installments" className="text-dark mb-2">Installments</label>
                    <div id="installments" className="border border-dark rounded p-2">
                        {installments.map((installment, index) => (
                            <div key={index}>{installment}</div>
                        ))}
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={handlePayment}>Pay Now</button>
            </form>
        </div>
    );
};

export default CourseFeeCalculator;
