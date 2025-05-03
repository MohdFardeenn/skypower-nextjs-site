import StarRating from "../Figures/StarRating";
import { Testimonial } from "../Home/CustomerTestimonials";

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <StarRating rating={testimonial.rating} />
      <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
      <div className="mt-auto">
        <h4 className="text-white font-medium">{testimonial.name}</h4>
        <p className="text-gray-400 text-sm">
          {testimonial.role}, {testimonial.location}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
