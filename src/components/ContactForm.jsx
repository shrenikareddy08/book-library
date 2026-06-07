import { useState, useRef } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Uncontrolled component
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (messageRef.current.value.trim().length < 10) {
      newErrors.message =
        "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log({
        name,
        email,
        message: messageRef.current.value,
      });

      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen pt-40 pb-12 px-6 flex items-center justify-center">
      <div className="w-full max-w-md p-8 rounded-3xl bg-white dark:bg-[#1a1a1a] shadow-xl">

        <h2 className="text-3xl font-serif text-center mb-6">
          Get in Touch
        </h2>

        {submitted ? (
          <p className="text-center text-green-600">
            Thank you! Message sent.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full border p-3 rounded-xl"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full border p-3 rounded-xl"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <textarea
                ref={messageRef}
                rows="4"
                placeholder="Message"
                className="w-full border p-3 rounded-xl"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#291303] text-white rounded-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}