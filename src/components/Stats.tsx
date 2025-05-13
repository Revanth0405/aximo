
const Stats = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5+</div>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">20+</div>
            <p className="text-gray-600">AI Experts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
