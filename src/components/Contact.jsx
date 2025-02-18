const Contact = () => {
  return (
    <div>
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0f051d] to-[#1b1036] py-20 px-6">
        <div className="max-w-md w-full">
          <h2 className="text-4xl font-bold text-center text-[#ff61f6] mb-12">
            Let's Get in Touch
          </h2>

          <div className="bg-[#1b1036] rounded-2xl p-6 border-2 border-[#7df9ff]/10 space-y-4">
            {/* Email */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0f051d] hover:bg-gradient-to-r from-[#ff61f6]/20 to-[#ff85f8]/10 transition-all duration-300">
              <span className="text-2xl">📧</span>
              <p className="text-white text-sm select-text cursor-text">benazizaeya14@gmail.com</p>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0f051d] hover:bg-gradient-to-r from-[#7df9ff]/20 to-[#90faff]/10 transition-all duration-300">
              <span className="text-2xl">📱</span>
              <p className="text-white text-sm select-text cursor-text">+216 58 468 249</p>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0f051d] hover:bg-gradient-to-r from-[#7b5eff]/20 to-[#a18fff]/10 transition-all duration-300">
              <span className="text-2xl">💼</span>
              <p className="text-white text-sm select-text cursor-text">Eya Ben Aziza</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact;