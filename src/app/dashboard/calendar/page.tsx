"use client";

import { useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import { es } from "date-fns/locale";
import { DateRange } from "react-day-picker";

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [date2, setDate2] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);

  const [range, setRange] = useState<DateRange | undefined>();

  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div>
      <div>
        <div className="border-b border-gray-200 mb-3 pb-3">
          <h2 className="text-2xl">Fecha</h2>
          <p>{smallDate}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row place-content-center gap-4">
        <Calendar
          mode="single"
          locale={es}
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow"
          disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
        />
        <Calendar
          mode="single"
          locale={es}
          selected={date2}
          onSelect={setDate2}
          className="rounded-md border shadow"
          // disabled={(date) => date > new Date()}
          disabled={{ after: new Date() }}
        />
        <Calendar
          mode="multiple"
          locale={es}
          selected={multipleDates}
          onSelect={setMultipleDates}
          className="rounded-md border shadow"
          max={5}
        />
        {multipleDates?.map((date) => date.toLocaleString()).join(",")}
        <Calendar
          mode="range"
          disabled={{ dayOfWeek: [0, 6] }}
          selected={range}
          onSelect={setRange}
          className="rounded-md border shadow"
        />
        {range?.from?.toLocaleDateString()} - {range?.to?.toLocaleDateString()}
      </div>
    </div>
  );
}
