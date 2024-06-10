import React from "react";

function ContactPage() {
  return (
    <section className="min-h-screen bg-[#e7f0ff] flex justify-center items-center">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row justify-around gap-8">
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Contact Us</h1>
          <p className=" mb-4">
            Email, call, or complete the form to learn how <br /> Snappy can solve your
            messaging problem.
          </p>
          <p className=" mb-2">info@snappy.io</p>
          <p className=" mb-4">321-221-231</p>
          <a href="#" className="text-black font-semibold underline mb-8">
            Customer Support
          </a>

          <div className="w-full flex flex-col md:flex-row text-left justify-center items-start gap-10 ">
            <div>
              <h2 className="font-bold mb-2">Customer Support</h2>
              <p className="text-sm">
                Our support team is available around the clock to address any
                concerns or queries you may have.
              </p>
            </div>
            <div>
              <h2 className="font-bold mb-2">
                Feedback and Suggestions
              </h2>
              <p className="text-sm">
                We value your feedback and are continuously working to improve
                Snappy. Your input is crucial in shaping the future of Snappy.
              </p>
            </div>
            <div>
              <h2 className="font-bold mb-2">Media Inquiries</h2>
              <p className="text-sm">
                For media-related questions or press inquiries, please contact
                us at media@snappyapp.com.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 xl:w-1/4 bg-white shadow-xl rounded-3xl p-5 text-left">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-4 text-sm font-medium text-slate-400">You can reach us anytime</p>
          <form>
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full lg:w-1/2 p-3 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full lg:w-1/2 p-3 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div className="mb-4 flex flex-col lg:flex-row gap-4">
              <select className="w-full lg:w-1/4 p-3 border rounded-lg">
                <option value="+91">+91</option>
              </select>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full lg:w-3/4 p-3 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="How can we help?"
                className="w-full p-3 border rounded-lg"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#5450db] text-white rounded-lg font-bold"
            >
              Submit
            </button>
            <p className="text-xs mt-4 font-medium text-slate-400">
              By contacting us, you agree to our{" "}
              <a href="#" className="text-[#5450db]  font-bold text-sm">
                Terms of service
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#5450db]  font-bold text-sm">
                Privacy Policy
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
