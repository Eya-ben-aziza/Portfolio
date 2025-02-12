

const Contact = () => {

  return (
    <div>
        <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0f051d] to-[#1b1036] py-20 px-6">
  <div className="max-w-md w-full">
    <h2 className="text-4xl font-bold text-center text-[#ff61f6] mb-12">
      Let's Get in Touch
    </h2>

    <div className="bg-[#1b1036] rounded-2xl p-6 border-2 border-[#7df9ff]/10 space-y-4">
      {/* Email Button */}
      <a
        href="mailto:benazizaeya14@gmail.com"
        className="flex items-center gap-4 p-4 rounded-xl bg-[#0f051d] hover:bg-gradient-to-r from-[#ff61f6]/20 to-[#ff85f8]/10 transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-2xl">📧</span>
        <div>
          <p className="text-[#7df9ff]">Email via Outlook</p>
          <p className="text-[#ff61f6] text-sm">eya.benaziza@example.com</p>
        </div>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/21658468249"
        className="flex items-center gap-4 p-4 rounded-xl bg-[#0f051d] hover:bg-gradient-to-r from-[#7df9ff]/20 to-[#90faff]/10 transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-2xl">📱</span>
        <div>
          <p className="text-[#7df9ff]">Message on WhatsApp</p>
          <p className="text-[#ff61f6] text-sm">+216 12 345 678</p>
        </div>
      </a>

      {/* LinkedIn Button */}
      <a
        href="https://linkedin.com/in/eya-benaziza"
        className="flex items-center gap-4 p-4 rounded-xl bg-[#0f051d] hover:bg-gradient-to-r from-[#7b5eff]/20 to-[#a18fff]/10 transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-2xl">💼</span>
        <div>
          <p className="text-[#7df9ff]">Connect on LinkedIn</p>
          <p className="text-[#ff61f6] text-sm">in/eya-benaziza</p>
        </div>
      </a>
    </div>
  </div>
</section>
    </div>
  )
}

export default Contact
