import React, { useState } from 'react';
import "./form.css"

const FormComponent = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="container">
            <div className="form-container">
                <h3>Register Now</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile:</label>
                        <div className="mobile-input">
                            <div className={`country-code ${isFocused && 'country-code-active'}`}>
                                <img className="country-image" src="data:image/png;base64,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" alt="" />
                                <p className="country">+91</p>
                            </div>
                            <input
                                style={{ borderRadius: '0px 10px 10px 0px' }}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                type="number"
                                id="mobile"
                                name="mobile"
                                placeholder="Enter your mobile number"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        {/* <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Put your site key here
                            onChange={handleRecaptcha}
                        /> */}
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default FormComponent;
