"use client";
import React, { useState } from "react";
import FormPublishDialog from "./FormPublishDialog";
import toast from "react-hot-toast";
import { submitForm } from "@/actions/submitForm";
import { publishForm } from "@/actions/publishForm";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Fields } from "@/types/form";


type Props = { form: any; isEditMode: boolean };

const AiGeneratedForm: React.FC<Props> = ({ form, isEditMode }) => {
  const [successDialogOpen, setSuccessDialogOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({});
 
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value}= e.target;
    setFormData({...formData, [name]:value});
  }
  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditMode) {
      await publishForm(form.id);
      setSuccessDialogOpen(true);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await submitForm(form.id, formData);

    if(data?.success){
      toast.success(data.message);
      setFormData({});
    }
    if(!data?.success){
      toast.error(data?.message);
    }
    
  };
  const value = typeof form.content !== 'object' ? JSON.parse(form.content as any) : form.content;

  let data;

  if (typeof value === "object" && form !== null && !Array.isArray(value)) {
    data = value.formFields;
  } else {
    data = value[0].formFields;
  }

  return (
    <div>
      <form onSubmit={isEditMode ? handlePublish : handleSubmit}>
        {data.map((item: Fields, index: number) => (
          <div key={index} className="mb-4">
            <Label>{item.label}</Label>
            <Input
              type="text"
              name={item.name}
              placeholder={item.placeholder}
              required={!isEditMode && true}
              onChange={handleChange}
            />
          </div>
        ))}
        <Button type="submit">{isEditMode ? "Publish" : "Submit"}</Button>
      </form>
      <FormPublishDialog
        formId={form.id}
        open={successDialogOpen}
        onOpenChange={setSuccessDialogOpen}
      />
    </div>
  );
};

export default AiGeneratedForm;