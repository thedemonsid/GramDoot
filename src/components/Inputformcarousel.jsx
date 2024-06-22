"use client"
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

const questions = [
  { id: 1, question: "What's the headline of your news story?", placeholder: "Enter a catchy headline", type: "text" },
  { id: 2, question: "What happened?", placeholder: "Briefly describe the main event", type: "text" },
  { id: 3, question: "Where did it happen?", placeholder: "Enter the location", type: "text" },
  { id: 4, question: "When did it happen?", placeholder: "Enter the date and time", type: "text" },
  { id: 5, question: "Who was involved?", placeholder: "List the main people or groups involved", type: "text" },
  { id: 6, question: "Why did it happen?", placeholder: "Explain the reasons if known", type: "text" },
  { id: 7, question: "How did it happen?", placeholder: "Describe the process or sequence of events", type: "text" },
  { id: 8, question: "What are the consequences?", placeholder: "Describe the impact or results", type: "text" },
  { id: 9, question: "Are there any additional details?", placeholder: "Add any other important information", type: "text" },
  { id: 10, question: "Upload photo proof", placeholder: "Upload a photo", type: "file" },
];

function InputCarousel() {
  const sliderRef = useRef(null);
  const [inputValues, setInputValues] = useState(questions.map(() => ""));

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleInputChange = (e, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = e.target.value;
    setInputValues(newInputValues);
  };

  const handleFileUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = event.target.result;
        setInputValues(newInputValues);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFinish = () => {
    console.log("Finished! News story details:", inputValues);
    const description = inputValues.join(" ");
    console.log("Description:", description);
    // Here you would typically send this data to Gemini AI 
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-background">
      <Card className="relative w-full h-full max-h-[600px] p-10 border-border mt-20">
        <CardContent className="flex items-center justify-center h-full p-0 m-2">
          <Slider ref={sliderRef} {...settings} className="w-full">
            {questions.map((item, index) => (
              <div key={item.id} className="px-4 py-8">
                <div className="flex flex-col items-center justify-center m-5 space-y-6">
                  <h2 className="text-2xl font-bold text-center text-primary">{item.question}</h2>
                  {item.type === "file" ? (
                    <div className="w-full max-w-md">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, index)}
                        className="hidden"
                        id={`file-upload-${item.id}`}
                      />
                      <label
                        htmlFor={`file-upload-${item.id}`}
                        className="flex items-center justify-center w-full p-2 mt-3 text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                      >
                        {inputValues[index] ? (
                          <img src={inputValues[index]} alt="Uploaded" className="max-w-full max-h-32" />
                        ) : (
                          <>
                            <Camera className="w-6 h-6 mr-2" />
                            Upload a photo
                          </>
                        )}
                      </label>
                    </div>
                  ) : (
                    <Input
                      type="text"
                      placeholder={item.placeholder}
                      className="w-full max-w-md mt-3 shadow-md"
                      value={inputValues[index]}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </CardContent>
        <Button
          variant="default"
          className="absolute shadow-md bottom-6 right-6"
          onClick={handleFinish}
        >
          Submit Story
        </Button>
      </Card>
    </div>
  );
}

export default InputCarousel;