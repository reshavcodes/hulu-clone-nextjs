/* eslint-disable react/display-name */
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

import { forwardRef } from "react";

const Thumbnail = forwardRef(({ data },ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div ref={ref} className="p-2 group cursor-pointer transition duration-200 transform sm:hover:scale-105 hover:z-50 rounded">
      <Image
        src={`${BASE_URL}${data.backdrop_path || data.poster_path}`}
        alt={data.title}
        width={1920}
        height={1080}
        layout="responsive"
      />
      <div className="p-2">
        <p className="truncate max-w-md">{data.overview}</p>
        <h2 className="mt-1 text-white text-xl transition-all duration-100 ease-in-out group-hover:font-bold">{data.title || data.original_name}</h2>
        <p className="flex items-center opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 capitalize">
          {data.media_type && `${data.media_type} ◉`}{" "}
          {data.release_date || data.first_air_date} ◉{" "}
          <ThumbUpIcon className="h-5 mx-2" />{data.vote_count}
        </p>
      </div>
    </div>
  )
})

export default Thumbnail;
