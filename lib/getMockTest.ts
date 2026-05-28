import mock1 from "@/data/mock-1.json";
import mock2 from "@/data/mock-2.json";
import mock3 from "@/data/mock-3.json";
import mock4 from "@/data/mock-4.json";
import mock5 from "@/data/mock-5.json";
import mock6 from "@/data/mock-6.json";
import mock7 from "@/data/mock-7.json";
import mock8 from "@/data/mock-8.json";

export function getMockTest(id:string){

  const mocks:any = {
    1: mock1,
    2: mock2,
    3: mock3,
    4: mock4,
    5: mock5,
    6: mock6,
    7: mock7,
    8: mock8,
  };

  return mocks[id];
}