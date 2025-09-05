import { Link } from "react-router";

export default function FileButton({ text, link }) {
  return (
    <a href={link} className="hover:cursor-pointer flex justify-center">
      <div className="border-2 border-black p-4 rounded-xl w-64 bg-[#f0ece4] text-black">
        {text}
      </div>
    </a>
  );
}
