export default function Contact() {
  return (
    <div className="p-8 pt-20 max-w-xl mx-auto" initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-gray-500 mb-6">Feel free to reach out via email or social media!</p>

      <form className="space-y-3">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border" />
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border" />
        <textarea name="" id="" placeholder="Your Message" rows="4" className="w-full p-3 rounded-lg border"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}
