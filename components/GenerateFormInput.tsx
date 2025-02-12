import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const GenerateFormInput = () => {
  return (
    <div className="flex items-center gap-4 my-8">
      <Input type="test" placeholder="write a prompt to generate the form" />
      <Button>Generate Form</Button>
    </div>
  );
};

export default GenerateFormInput;
