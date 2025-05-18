
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PaymentPage() {
  return (
    <div className="container mx-auto max-w-md py-8">
      <h1 className="text-2xl font-bold mb-5">Payments</h1>
      <Card>
        <CardContent className="p-6">
          <div className="text-gray-700 mb-4"> 
            <span className="font-medium">Demo: </span>
            No real payment is processed. Integrate Stripe/Supabase for actual payments.
          </div>
          <Button disabled className="bg-tutorpro-teal w-full my-3">Pay for Session ($40)</Button>
          <Button disabled className="bg-tutorpro-blue w-full">Upgrade to Premium (Subscription)</Button>
        </CardContent>
      </Card>
      <div className="mt-10 text-center text-gray-400 text-xs">
        For a real payment flow, connect Supabase, configure Edge Functions, and add Stripe keys.
      </div>
    </div>
  );
}
