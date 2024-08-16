import React from "react";

const page = () => {
  return (
    <div>
      {/* 1. Hero Section */}
      <section
        className="hero bg-cover bg-center"
        style={{ backgroundImage: "url(/path-to-your-image.jpg)" }}
      >
        <div className="container mx-auto text-center py-20">
          <h1 className="text-4xl font-bold text-white">
            Transforming Futures Through Innovative Bootcamps
          </h1>
          <p className="text-xl text-white mt-4">
            Powered by Leading Industry Partnerships
          </p>
        </div>
      </section>
      {/* 2. Partner Logos */}
      <section className="partners py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Our Partners</h2>
          <div className="flex justify-center space-x-8">
            <img
              src="/path-to-cellcard-logo.png"
              alt="Cellcard"
              className="h-12"
            />
            <img src="/path-to-ezecom-logo.png" alt="EZECOM" className="h-12" />
            <img
              src="/path-to-wingbank-logo.png"
              alt="Wing Bank"
              className="h-12"
            />
          </div>
        </div>
      </section>
      {/* 3. Success Stories */}
      <section className="success-stories py-10 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="testimonial">
              <p className="text-lg">
                "The bootcamp transformed my career. I landed a job within a
                month!"
              </p>
              <p className="text-sm text-gray-600 mt-2">- Bootcamp Graduate</p>
            </div>
            <div className="testimonial">
              <p className="text-lg">
                "Our partnership with SabaiCode has been incredibly beneficial."
              </p>
              <p className="text-sm text-gray-600 mt-2">
                - Partner Organization
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 4. Case Studies */}
      <section className="case-studies py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="case-study">
              <h3 className="text-xl font-bold">Partnership with Cellcard</h3>
              <p className="mt-2">
                Details about the partnership and its impact...
              </p>
              <video src="/path-to-video.mp4" controls className="mt-4"></video>
            </div>
            <div className="case-study">
              <h3 className="text-xl font-bold">Partnership with EZECOM</h3>
              <p className="mt-2">
                Details about the partnership and its impact...
              </p>
              <video src="/path-to-video.mp4" controls className="mt-4"></video>
            </div>
          </div>
        </div>
      </section>
      {/* 5. Visual Impact */}
      <section className="visual-impact py-10 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            Our Programs in Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="/path-to-photo1.jpg"
              alt="Bootcamp Session"
              className="w-full h-auto"
            />
            <img
              src="/path-to-photo2.jpg"
              alt="Bootcamp Session"
              className="w-full h-auto"
            />
            <video
              src="/path-to-video1.mp4"
              controls
              className="w-full h-auto"
            ></video>
            <video
              src="/path-to-video2.mp4"
              controls
              className="w-full h-auto"
            ></video>
          </div>
        </div>
      </section>
      {/* 6. Call to Action */}
      <section className="call-to-action py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">
            Join Us in Transforming Futures
          </h2>
          <p className="text-lg mb-6">
            Become a sponsor or partner with us today!
          </p>
          <a href="/path-to-brochure.pdf" className="btn btn-primary">
            Download Partnership Brochure
          </a>
          <form className="mt-6">
            <input type="text" placeholder="Your Name" className="input mb-4" />
            <input
              type="email"
              placeholder="Your Email"
              className="input mb-4"
            />
            <textarea
              placeholder="Your Message"
              className="textarea mb-4"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Contact Us
            </button>
          </form>
        </div>
      </section>
      {/* 7. Statistics and Impact */}
      <section className="statistics py-10 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stat">
              <h3 className="text-xl font-bold">500+</h3>
              <p className="text-lg">Participants</p>
            </div>
            <div className="stat">
              <h3 className="text-xl font-bold">300+</h3>
              <p className="text-lg">Job Placements</p>
            </div>
            <div className="stat">
              <h3 className="text-xl font-bold">50+</h3>
              <p className="text-lg">Success Stories</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
