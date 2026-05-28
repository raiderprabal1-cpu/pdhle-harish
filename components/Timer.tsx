"use client";

import {
  useEffect,
  useState,
} from "react";

export default function Timer(){

  const [time, setTime] =
    useState(7200);

  useEffect(()=>{

    const saved =
      localStorage.getItem("timer");

    if(saved){
      setTime(Number(saved));
    }

  }, []);

  useEffect(()=>{

    const interval =
      setInterval(()=>{

      setTime((prev)=>{

        if(prev <= 1){

          clearInterval(interval);

          localStorage.removeItem(
            "timer"
          );

          return 0;
        }

        localStorage.setItem(
          "timer",
          String(prev - 1)
        );

        return prev - 1;
      });

    },1000);

    return ()=>clearInterval(interval);

  }, []);

  const hours =
    Math.floor(time / 3600);

  const minutes =
    Math.floor(
      (time % 3600) / 60
    );

  const seconds =
    time % 60;

  return(

    <div className="gradient px-6 py-4 rounded-2xl font-black text-2xl">

      {String(hours).padStart(2,"0")}:
      {String(minutes).padStart(2,"0")}:
      {String(seconds).padStart(2,"0")}

    </div>

  );
}