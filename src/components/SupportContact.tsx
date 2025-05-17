
import React from "react";
import { Mail, Phone } from "lucide-react";

export default function SupportContact() {
  return (
    <section className="bg-tutorpro-gray px-6 py-5 rounded-lg flex flex-col sm:flex-row sm:items-center gap-6">
      <div>
        <h3 className="text-lg font-semibold mb-1">Contact Customer Support</h3>
        <div className="flex items-center gap-2 text-tutorpro-blue">
          <Phone size={18} />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center gap-2 text-tutorpro-blue mt-1">
          <Mail size={18} />
          <a href="mailto:support@tutorpro.com" className="underline">support@tutorpro.com</a>
        </div>
      </div>
      <div className="flex-1">
        <div className="mt-4 sm:mt-0 sm:ml-10 text-gray-600">
          Prefer live chat? Try our {" "}
          <a href="/support-slack" className="underline text-tutorpro-blue">Slack channel</a>.
        </div>
      </div>
    </section>
  );
}
