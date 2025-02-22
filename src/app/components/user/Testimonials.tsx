const Testimonials = () => {
  const testimonials = [
    {
      text: "The booking process was super easy. Found a great football turf near my place!",
      author: "John D.",
      role: "Football Enthusiast",
    },
    {
      text: "We use this platform for all our team's practice sessions. Highly recommended!",
      author: "Sarah M.",
      role: "Basketball Team Captain",
    },
    {
      text: "Excellent service and great facilities. The ratings are very accurate.",
      author: "Raj P.",
      role: "Cricket Player",
    },
  ];

  return (
    <section className="py-16 bg-green-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-green-700 p-6 rounded-lg">
              <p className="italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-green-200">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
