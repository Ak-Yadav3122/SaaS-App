import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PricingPlan, pricingPlan } from "@/lib/pricingplan";
import { Badge } from "../ui/badge";

export function PricingPage() {
  return (
    <div className="px-4 md:px-12 py-12 transition-colors duration-300">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="font-extrabold text-2xl md:text-4xl text-gray-900 dark:text-white">
          Plan and Pricing
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-lg">
          Receive unlimited credits when you pay early, and save your plan.
        </p>
      </div>

      {/* Container to prevent overflow */}
      <div className="max-w-screen-xl mx-auto overflow-hidden">
        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {pricingPlan.map((plan: PricingPlan, index: number) => (
            <Card
              className={`${
                plan.level === "Enterprise"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 dark:bg-gray-800 dark:text-white"
              } w-full sm:w-[350px] flex flex-col justify-between shadow-lg rounded-xl transition-all duration-300`}
              key={index}
            >
              {/* Card Header */}
              <CardHeader className="flex flex-row items-center gap-2">
                <CardTitle className="text-lg md:text-2xl">{plan.level}</CardTitle>
                {plan.level === "Pro" && (
                  <Badge className="rounded-full bg-orange-600 hover:bg-orange-700 text-white text-xs px-3 py-1">
                    🔥 Popular
                  </Badge>
                )}
              </CardHeader>

              {/* Card Content */}
              <CardContent className="flex-1">
                <p className="text-xl md:text-2xl font-bold">{plan.price}</p>
                <ul className="mt-4 space-y-2 text-sm md:text-base">
                  {plan.services.map((item: string, index: number) => (
                    <li className="flex items-center" key={index}>
                      <span className="text-green-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Card Footer */}
              <CardFooter>
                <Button
                  variant={plan.level === "Enterprise" ? "default" : "outline"}
                  className={`w-full text-base md:text-lg transition-colors ${
                    plan.level === "Enterprise"
                      ? "text-black bg-white hover:bg-gray-200 dark:bg-gray-300 dark:text-black dark:hover:bg-gray-400"
                      : "border-gray-300 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  Get started with {plan.level}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
