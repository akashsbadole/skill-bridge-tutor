
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import SupportContact from "@/components/SupportContact";

export default function SupportPage() {
  return (
    <div className="container mx-auto max-w-2xl py-8">
      <h1 className="text-2xl font-bold mb-4">Customer Support</h1>
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-tutorpro-blue" />
              <span>Phone: <a href="tel:+15551234567" className="underline">+1 (555) 123‑4567</a></span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-tutorpro-blue" />
              <span>Email: <a href="mailto:support@tutorpro.com" className="underline">support@tutorpro.com</a></span>
            </div>
          </div>
          <div className="mt-4">
            Live chat: <a href="/support-slack" className="underline text-tutorpro-blue">Try our Slack channel</a>
          </div>
        </CardContent>
      </Card>
      <div className="my-8">
        <SupportContact />
      </div>
    </div>
  );
}
