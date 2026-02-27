import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-card">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="/images/cake_and_tea.png"
          alt="Traditional London government building"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/55" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-widest text-teal uppercase mb-4 font-sans">
            Get in Touch
          </p>
          <h2 className="text-3xl font-normal text-foreground font-serif sm:text-4xl lg:text-5xl text-balance leading-tight">
            Ready to reveal the clarity in your data?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground font-sans lg:text-lg">
            We would welcome a conversation about the challenges you are working through and where data might be able to help.
          </p>

          <form
            className="mt-16 inline-block w-full rounded bg-border p-8 shadow-lg shadow-black/70 md:w-[390px]"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="04f21ccb-c2d5-42a7-b94c-2ab1bcbaf950"
            />

            <div className="form-control text-left mb-4">
              <label htmlFor="name" className="text-left label label-std">
                <span className="text-left text-muted-foreground">
                  {" "}
                  Name{" "}
                </span>
              </label>
              <input
                className="input w-full max-w-xs bg-input"
                type="text"
                id="name"
                name="name"
                required={true}
              />
            </div>

            <div className="form-control text-left mb-4">
              <label htmlFor="email" className="text-left label label-std">
                <span className="text-left text-muted-foreground">
                  Email
                </span>
              </label>
              <input
                className="input w-full max-w-xs bg-input"
                type="email"
                id="email"
                name="email"
                required={true}
              />
            </div>

            <div className="form-control text-left mb-4">
              <label htmlFor="role" className="text-left label label-std">
                <span className="text-left text-muted-foreground">
                  Role in your organisation
                </span>
              </label>
              <input
                className="input w-full max-w-xs bg-input"
                type="role"
                id="role"
                name="role"
                required={true}
              />
            </div>

            <div className="form-control text-left mb-4">
              <label htmlFor="message" className="text-left label label-std">
                <span className="text-left text-muted-foreground">
                  {" "}
                  Message{" "}
                </span>
              </label>
              <textarea
                className="input h-32 w-full max-w-xs bg-input"
                id="message"
                name="message"
              ></textarea>
            </div>

            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />
            <input
              type="hidden"
              name="redirect"
              value="https://sheridanandbairns.com/thanks/"
            />

            <button
              className="text-sm font-medium text-copper-foreground bg-copper px-5 py-2 rounded-sm hover:opacity-90 transition-opacity"
              type="submit"
            >
              {" "}
              Send{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
