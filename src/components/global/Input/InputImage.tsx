"use client";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import React, { useRef } from "react";

interface InputImageProps {
  // image: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

const InputImage: React.FC<InputImageProps> = ({ inputRef, onChange }) => {
  // const fileInput = useRef<HTMLInputElement>(null);
  return (
    <div
      className="mx-auto p-0 flex items-center gap-2 cursor-pointer border border-primary p-2 rounded-md"
      onClick={() => inputRef?.current?.click()}
    >
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        className="hidden"
        onChange={onChange}
        ref={inputRef}
      />
      <PencilSquareIcon width={25} height={25} className="text-primary" />
      <p className="text-sm text-primary font-semibold">Ubah Gambar</p>
    </div>
  );
};

export default InputImage;
