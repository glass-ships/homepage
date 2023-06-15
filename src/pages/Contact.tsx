import Footer from '@/components/Footer';

// Simple contact form with sender email, subject, and message body
export default function Contact() {
    return (
<div 
    id="contact" 
    className="
    flex flex-col items-center justify-center gap-8
    min-h-screen w-7/12 px-8 py-16 text-center 
    bg-gradient-to-b from-black/10 via-black/50 to-black/30 backdrop-blur-2xl
    drop-shadow-xl shadow-black rounded-b-2xl
    snap-y snap-mandatory
    "
>
    <div className="flex flex-col items-center justify-center gap-8 snap-center">
        <h1 className="text-7xl font-thin text-gray-200">
            Contact
        </h1>
        <p className="text-2xl font-mono text-gray-400">
            Interested in working together? <br/>
            Reach out to me at any of the links below,<br/>
            or use this form to send me an email. <br/> <br/>
        </p>
        <form 
            className="flex flex-col gap-4 w-[75%] h-3/4 text-slate-300  shadow-xl" 
            action="https://formspree.io/f/moqpzbzj" 
            method="POST"
        >
            <input className="text-xl p-2 bg-zinc-800/70" type="email" name="email" placeholder="Your email" />
            <input className="text-xl p-2 bg-zinc-800/70" type="text" name="subject" placeholder="Subject" />
            <textarea className="text-xl p-2 bg-zinc-800/70" name="message" placeholder="Your message" rows={10} />
            <button className="text-xl p-2 bg-amber-200 text-black" type="submit">Send</button>
        </form>
    </div>
    <Footer />
</div>
    )
};