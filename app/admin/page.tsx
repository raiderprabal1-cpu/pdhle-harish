"use client";

import { useState } from "react";

export default function AdminPage(){

  const [json, setJson] =
    useState("");

  const uploadQuestions = () => {

    try{

      JSON.parse(json);

      alert(
        "Questions Uploaded Successfully 🚀"
      );

    }catch{

      alert(
        "Invalid JSON ❌"
      );

    }
  };

  return(

    <div className="max-w-5xl mx-auto px-6 py-20">

      <h1 className="text-6xl font-black">
        Admin Panel
      </h1>

      <textarea
        value={json}
        onChange={(e)=>
          setJson(e.target.value)
        }
        placeholder="Paste Questions JSON Here..."
        className="w-full h-96 mt-10 bg-slate-900 border border-slate-700 rounded-2xl p-6"
      />

      <button
        onClick={uploadQuestions}
        className="gradient mt-8 px-8 py-4 rounded-2xl font-bold"
      >
        Upload Questions
      </button>

    </div>
  );
}